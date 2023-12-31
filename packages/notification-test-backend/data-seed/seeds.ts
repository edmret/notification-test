import { createConnection } from 'mongoose';
import { UserSchema } from '../src/modules/schema/user.schema';
import { CategorySchema } from '../src/modules/schema/category.schema';

require('dotenv').config();

const Categories = ['Sports', 'Finance', 'Movies'];

const userDatas = [
  {
    name: 'John Doe',
    email: 'John@test.com',
    phoneNumber: '1234567890',
    Subscribed: ['Movies'],
    Channels: ['SMS', 'Push Notification'],
  },
  {
    name: 'Vianna Collar',
    email: 'vian@test.com',
    phoneNumber: '1234567891',
    Subscribed: ['Finance', 'Movies'],
    Channels: ['E-Mail'],
  },
  {
    name: 'Peter parker',
    email: 'peter@test.com',
    phoneNumber: '1234567894',
    Subscribed: ['Sports', 'Movies'],
    Channels: ['E-Mail', 'SMS', 'Push Notification'],
  },
];

const seedDatabase = async () => {
  try {
    const conn = createConnection(process.env.MONGODB_CONNECTION_STRING);
    console.log(
      'Connecting to database...',
      process.env.MONGODB_CONNECTION_STRING,
    );
    const userModel = conn.model('User', UserSchema);
    const categoryModel = conn.model('Category', CategorySchema);

    console.log('Deleting existing data...');
    // delete all existing data
    await userModel.deleteMany({});
    await categoryModel.deleteMany({});

    console.log('Seeding users...');
    for (const userData of userDatas) {
      // adding new user
      await userModel.create(userData);
    }

    console.log('Seeding categories...');
    for (const category of Categories) {
      // adding new category
      await categoryModel.create({ name: category });
    }

    console.log('Database seeded.');

    await conn.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
