import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

const ProjectBody = z.object({
  title: z.string().min(1),
  text: z.string().min(1),
  imgUrl: z.string().url().optional(),
  url: z.string().url().optional(),
  github: z.string().url().optional(),
});

router.get('/', async (_req, res) => {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });
  res.json(projects);
});

router.post('/', async (req, res) => {
  const parsed = ProjectBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const created = await prisma.project.create({ data: parsed.data });
  res.status(201).json(created);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.project.delete({ where: { id } });
    res.status(204).send(); 
  } catch (e) {
    res.status(404).json({ error: 'Project not found', details: String(e) });
  }
});

export default router;
