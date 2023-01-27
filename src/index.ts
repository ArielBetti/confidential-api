import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors';

const prisma = new PrismaClient()
const app = express()

app.use((req, res, next) => { next(); }, cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json())

app.post(`/message/create`, async (req, res) => {
  const { title, subTitle, message } = req.body;

  const result = await prisma.message.create({
    data: {
      message,
      title,
      subTitle,
    },
  });

  res.json(result)
});

app.delete(`/message/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.message.delete({
    where: {
      id: String(id),
    },
  })
  res.json(post)
});

app.get(`/message/:id`, async (req, res) => {
  const { id } = req.params

  try {
    const post = await prisma.message.findUnique({
      where: { id: String(id) },
    })

    if (!post) throw new Error;

    res.json(post)
  } catch (error) {
    res.status(404).send();
  }
})

app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
