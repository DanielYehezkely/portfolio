import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const file = path.join(process.cwd(), 'prisma', 'seed.json');
  const items = JSON.parse(fs.readFileSync(file, 'utf8')) as Array<{
    title: string;
    text: string;
    imgUrl?: string;
    url?: string;
    github?: string;
  }>;

  await prisma.project.createMany({ data: items, skipDuplicates: true });
  console.log(`✅ Seeded ${items.length} projects.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
