import { NextApiRequest, NextApiResponse } from 'next';
import getUser from './getUser';
import redis from './redis';
import { Comment } from './types';

export default async function createComments(req: NextApiRequest, res: NextApiResponse) {
  const { url, text } = req.body;
  const { authorization } = req.headers;

  if (!url || !text || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' });
  }

  if (!redis) {
    return res.status(400).json({ message: 'Failed to connect to redis client.' });
  }

  try {
    const user = await getUser(authorization);
    if (!user) return res.status(400).json({ message: 'Need authorization.' });

    const { name, picture, sub, email } = user;

    const comment: Comment = {
      created_at: Date.now(),
      url,
      text,
      user: { name, picture, sub, email },
    };

    await redis.lpush(url, JSON.stringify(comment));

    return res.status(200).json(comment);
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' });
  }
}
