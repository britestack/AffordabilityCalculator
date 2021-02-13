const csvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const records = 1600000;

const users = (startIndex, endIndex) => {
  const usersArray = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    const entry = {
      users_id: i,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      user_password: faker.internet.password(),
      user_ip: faker.internet.ip(),
    };
    usersArray.push(entry);
  }
  return usersArray;
};

const csvUsersGenerator = csvWriter({
  path: './users.csv',
  header: [
    { id: 'users_id', title: 'users_id' },
    { id: 'username', title: 'username' },
    { id: 'email', title: 'email' },
    { id: 'user_password', title: 'user_password' },
    { id: 'user_ip', title: 'user_ip' },
  ],
});

async function writeLottaUsers(num) {
  const currentChunk = Math.floor(num / 100);
  console.log(`Counting Chunk: ${currentChunk}`);
  for (let i = 0; i < 100; i += 1) {
    console.log(`Writing chunk: ${i + 1} `);
    const usersToWrite = users(currentChunk * i, currentChunk * (i + 1) - 1);
    await csvUsersGenerator.writeRecords(usersToWrite);
  }
}

writeLottaUsers(records);
