import { allPosts } from 'contentlayer/generated'
import { NextApiResponse } from 'next'

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map(slug => {
            return `
                <url>
                    <loc>${`https://idm1try.ru${slug}`}</loc>
                </url>
            `
          })
          .join('')}
    </urlset>
`

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const allPages = [
    ...allPosts.map(post => post.slug),
    ...['/', '/writing', '/projects'],
  ]

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.write(createSitemap(allPages))
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap(): unknown {
  return null
}
