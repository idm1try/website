import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

const interRegular = fetch(
  new URL('../../../../public/fonts/Inter-Regular.ttf', import.meta.url),
).then(res => res.arrayBuffer())

const interBold = fetch(
  new URL('../../../../public/fonts/Inter-Bold.ttf', import.meta.url),
).then(res => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = Object.fromEntries(url.searchParams)
    const heading = values.heading.length > 140
      ? `${values.heading.substring(0, 140)}...`
      : values.heading
    const fontSize = heading.length > 100 ? '70px' : '100px'

    return new ImageResponse(
      (
        <div
          tw='flex relative flex-col px-20 py-30 w-full h-full items-start'
          style={{
            color: '#cdd6f4',
            background: 'linear-gradient(56deg, #11111b, #181825, #1e1e2e)',
          }}
        >
          <div
            tw='flex leading-[1.1] text-[80px] mb-12'
            style={{
              fontFamily: 'Inter',
              fontWeight: 'bolder',
              fontSize,
            }}
          >
            {heading}
          </div>
          <div
            tw='text-3xl'
            style={{ fontFamily: 'Inter', fontWeight: 'normal', color: '#6c7086' }}
          >
            {values.desc}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: fontBold,
            weight: 700,
            style: 'normal',
          },
        ],
      },
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
