import { allWritings } from 'contentlayer/generated'

export default async function sitemap() {
  const writings = allWritings.map(post => ({
    url: `https://idm1try.ru/writing/${post.slug}`,
    lastModified: post.date,
  }))

  const routes = ['', '/writing'].map(route => ({
    url: `https://idm1try.ru${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...writings]
}
