const { PrismaClient } = require('@prisma/client');
('use strict');

const prisma = new PrismaClient();

module.exports = async function (fastify, opts) {
  // Show all data
  fastify.get('/', async function (request, reply) {
    const userList = await prisma.users.findMany();
    reply.send(userList);
  });

  // Show specific data
  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params;
    const userUnique = await prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });
    reply.send(userUnique);
  });

  // Create data
  fastify.post('/', async function (request, reply) {
    const { username, password } = request.body;
    const userCreate = await prisma.users.create({
      data: {
        username: username,
        password: password,
      },
    });
    reply.send(userCreate);
  });

  // Update data
  fastify.put('/:id', async function (request, reply) {
    const { id } = request.params;
    const { username } = request.body;
    const userUpdate = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        username: username,
      },
    });
    reply.send(userUpdate);
  });

  // Delete data
  fastify.delete('/:id', async function (request, reply) {
    const id = request.params;
    const userDelete = await prisma.users.delete({
      where: {
        id: Number(id),
      },
    });
    reply.send(userDelete);
  });
};
