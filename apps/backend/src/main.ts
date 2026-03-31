import Fastify from 'fastify';
import cors from '@fastify/cors';
import { setupDatabase } from './infrastructure/database';

const server = Fastify({
  logger: true,
});

server.register(cors);

server.get('/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

const start = async () => {
  try {
    await setupDatabase();
    await server.listen({ port: 8080, host: '0.0.0.0' });
    console.log(`Server listening on 8080`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
