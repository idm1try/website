import { NextApiRequest, NextApiResponse } from 'next';
import chromium from 'chrome-aws-lambda';
import playwright from 'playwright-core';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath:
      process.env.NODE_ENV !== 'development' ? await chromium.executablePath : undefined,
    headless: process.env.NODE_ENV !== 'development' ? chromium.headless : true,
  });

  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 720,
    },
  });

  const url = req.query.url as string;
  const colorScheme = req.query.colorScheme as 'light' | 'dark' | 'no-preference' | null;

  await page.emulateMedia({ colorScheme });
  await page.goto(url);

  // wait for animations complete
  if (req?.query?.url.includes('https://twitter.com')) {
    await page.waitForTimeout(1000);
  }

  if (req?.query?.url.includes('https://idm1try.ru')) {
    await page.waitForTimeout(1000);
  }

  if (req?.query?.url.includes('http://localhost:3000')) {
    await page.waitForTimeout(1000);
  }

  const data = await page.screenshot({
    type: 'png',
  });

  await browser.close();

  res.setHeader('Cache-Control', 's-maxage=31536000, public');
  res.setHeader('Content-Type', 'image/png');
  res.end(data);
}
