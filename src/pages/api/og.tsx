import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

const interRegular = fetch(
  new URL('../../../public/fonts/Inter-Regular.ttf', import.meta.url)
).then(res => res.arrayBuffer())

const interBold = fetch(
  new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url)
).then(res => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = Object.fromEntries(url.searchParams)
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading
    const fontSize = heading.length > 100 ? '70px' : '100px'

    return new ImageResponse(
      (
        <div
          tw='flex relative flex-col px-20 py-30 w-full h-full items-start text-neutral-100'
          style={{
            background: 'linear-gradient(56deg, #171717, #262626, #404040)',
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
            tw='text-neutral-400 text-3xl'
            style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
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
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
