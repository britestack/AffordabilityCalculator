const csvWriter = require('csv-writer').createObjectCsvWriter;

const records = 10000000;

const getRandoms = (max, min) => (Math.floor((Math.random() * (max - min)) + min));
const getRatings = (max, min) => Math.random() * (max - min) + min;

const listings = (startIndex, endIndex) => {
  const listingArray = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    const entry = {
      listing_id: i,
      price: getRandoms(100000000, 500000),
      rating: getRatings(5, 3.5).toFixed(2),
    };
    listingArray.push(entry);
  }
  return listingArray;
};

const csvGenerator = csvWriter({
  path: './db/listings.csv',
  header: [
    { id: 'listing_id', title: 'listing_id' },
    { id: 'price', title: 'price' },
    { id: 'rating', title: 'rating' },
  ],
});

async function writeLottaListings(num) {
  const currentChunk = Math.floor(num / 100);
  console.log(`Counting Chunk: ${currentChunk}`);
  for (let i = 0; i < 100; i += 1) {
    console.log(`Writing chunk: ${i + 1} `);
    const listingToWrite = listings(currentChunk * i, currentChunk * (i + 1) - 1);
    await csvGenerator.writeRecords(listingToWrite);
  }
}

writeLottaListings(records);
