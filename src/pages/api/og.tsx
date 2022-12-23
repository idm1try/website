import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
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
          tw='flex relative flex-col p-20 w-full h-full items-start text-neutral-100'
          style={{
            background: 'linear-gradient(56deg, #171717, #262626, #404040)',
          }}
        >
          <div tw='flex flex-col flex-1 py-10'>
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
              tw='text-neutral-400 text-2xl'
              style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
            >
              {values.desc}
            </div>
            <div
              tw='text-neutral-400 text-2xl flex'
              style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
            >
              {new Date(values.date).toLocaleString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}{' '}
              / {values.readtime}
            </div>
          </div>
          <div
            tw='flex items-center w-full justify-between text-neutral-400 text-xl'
            style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
          >
            idm1try.ru
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
