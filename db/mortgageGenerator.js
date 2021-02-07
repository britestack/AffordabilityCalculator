const csvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const records = 10000000;

const randomOffering = () => {
  const offeringPossibilities = ['15 Year Fixed', '30 Year Fixed', '5/1 Arm'];
  const randomIdx = Math.floor(Math.random() * offeringPossibilities.length);
  return offeringPossibilities[randomIdx];
};

const mortgages = (startIndex, endIndex) => {
  const mortgageArray = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    const entry = {
      mortgage_id: i,
      mortgage_name: faker.company.companyName(),
      terms: randomOffering(),
      fees: faker.finance.amount(0, 550, 0),
      rate: faker.finance.amount(2, 5, 3),
      apr: faker.finance.amount(2, 5, 3),
    };
    mortgageArray.push(entry);
  }
  return mortgageArray;
};

const csvMortgageGenerator = csvWriter({
  path: './db/mortgages.csv',
  header: [
    { id: 'mortgage_id', title: 'mortgage_id' },
    { id: 'terms', title: 'terms' },
    { id: 'fees', title: 'fees' },
    { id: 'rate', title: 'rate' },
    { id: 'apr', title: 'apr' },
  ],
});

async function writeLottaMortgages(num) {
  const currentChunk = Math.floor(num / 100);
  console.log(`Counting Chunk: ${currentChunk}`);
  for (let i = 0; i < 100; i += 1) {
    console.log(`Writing chunk: ${i + 1} `);
    const mortgagesToWrite = mortgages(currentChunk * i, currentChunk * (i + 1) - 1);
    await csvMortgageGenerator.writeRecords(mortgagesToWrite);
  }
}

writeLottaMortgages(records);
