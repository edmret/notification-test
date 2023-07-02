import { connect, disconnect } from 'mongoose';
import dotenv from 'dotenv';
import { UserSchema } from 'src/modules/schema/user.schema';

dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to the MongoDB database
    await connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data (optional)
    await UserSchema.deleteMany({});

    // Create new cats
    await UserSchema.create([
      {
        id: 'ee455113-affa-4158-9597-bd522f9f0aaf',
        name: 'John Doe',
        email: 'John@test.com',
        phoneNumber: '1234567890',
        Subscribed: ['Sports'],
        Channel: ['SMS'],
      },
      {
        id: '1e22abf1-2278-4209-9a5d-8c3778bd153b',
        name: 'Vianna Collar',
        email: 'vian@test.com',
        phoneNumber: '1234567891',
        Subscribed: ['Finance'],
        Channel: ['E-Mail'],
      },
      {
        id: '40deb7d9-e63f-4948-87e5-eb2a3a07f4fa',
        name: 'Peter parker',
        email: 'peter@test.com',
        phoneNumber: '1234567894',
        Subscribed: ['Sports', 'Finance', 'Movies'],
        Channel: ['E-Mail'],
      },
    ]);

    console.log('Database seeding completed.');

    // Disconnect from the MongoDB database
    await disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();