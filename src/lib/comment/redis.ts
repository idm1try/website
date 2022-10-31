import IORedis, { Redis } from 'ioredis';

class ClientRedis {
  static instance: Redis;

  constructor() {
    throw new Error('Use Singleton.getInstance()');
  }

  static getInstance(): Redis | null {
    if (!ClientRedis.instance) {
      ClientRedis.instance = new IORedis(process.env.REDIS_URL);
    }
    return ClientRedis.instance;
  }
}

export default ClientRedis.getInstance();
