import { PrismaClient, SettingType } from '@prisma/client';

const prisma = new PrismaClient();

const defaultSettings = [
  {
    key: 'platform.fee.percent',
    value: 8,
    type: SettingType.NUMBER,
    description: 'Platform fee % on successful promotion',
  },
  {
    key: 'platform.fee.min',
    value: 0,
    type: SettingType.NUMBER,
    description: 'Minimum platform fee (INR)',
  },
  {
    key: 'platform.fee.max',
    value: 50000,
    type: SettingType.NUMBER,
    description: 'Maximum platform fee (INR)',
  },
  {
    key: 'promotion.min.increment',
    value: 500,
    type: SettingType.NUMBER,
    description: 'Minimum bid increment (INR)',
  },
  {
    key: 'promotion.currency.default',
    value: 'INR',
    type: SettingType.STRING,
    description: 'Default currency',
  },
  {
    key: 'promotion.min.amount',
    value: 1000,
    type: SettingType.NUMBER,
    description: 'Minimum promotion amount (INR)',
  },
  {
    key: 'promotion.max.amount',
    value: 10000000,
    type: SettingType.NUMBER,
    description: 'Maximum promotion amount (INR)',
  },
  {
    key: 'ranking.tie.rule',
    value: 'EARLIER_FIRST',
    type: SettingType.STRING,
    description: 'Tie-break rule',
  },
];

async function main() {
  console.log('Seeding platform settings...');

  for (const s of defaultSettings) {
    await prisma.platformSetting.upsert({
      where:  { key: s.key },
      update: {},        // never overwrite admin edits
      create: s,
    });
    console.log(`  ✓ ${s.key} = ${JSON.stringify(s.value)}`);
  }

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });