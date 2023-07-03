# Notification Test

### Running the project

### Disclaimer
this project will run on development ports and for now are not configurables since is a test
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Using Docker
Using `Docker` is the easiest way of running the application just by executing `docker compose up --build` in the root folder.

### Using the local environment
#### Requirements
- NodeJS 16
- MongoDB
- Change the `packages/notification-test-backed/.env` file to match your local environment in the `mongodb`

#### Running the backend
- `cd packages/notification-test-backend`
- `npm install`
- `npm run start:dev`

#### Running the frontend
- `cd packages/notification-test-front`
- `npm install`
- `npm run dev`

#### Data Seed
you may need to run the data-seed once
- `cd packages/notification-test-backend`
- `npm run data-seed`

### Tech Stack
- NestJS
- NextJS
- MongoDB

### Image
![Photo App](../images/image.png)

## Instructions
We have to create a notification system that has the ability to receive a message and depending on the category and subscribers, notify these users in the channels they are registered.
It will be 3 message categories:
- Sports
- Finance
- Movies

And there will be 3 types of notifications, each type should have its own class to manage the logic of sending the message independently.

- SMS
- E-Mail
- Push Notification

No notification will actually be sent or the need to communicate with any external APIs, only will register the sent notification in an archive of Logs or in a database.
In the log, it will need to save all the information necessary to identify that the notification has been sent correctly to the respective subscriber, such as the type of message, type of notification, user data, time, etc.

No user administration is required, you can use a Mock of users in the source code, and they must have the following information:
- ID
- Name
- Email
- Phone number
- Subscribed [ ] here you need to list all the categories where the user is subscribed
- Channels [ ] a list of the notification's channels (SMS | E-Mail | Push Notification)
As user interface you need to display 2 main elements.
1. Submission form. A simple form to send the message, which will have 2 fields:
- Category. List of available categories.
- Message. Text area, only validate that the message is not empty.
2. Log history. A list of all records in the log, sorted from newest to oldest.
We will evaluate:
- Architecture of the application and software design patterns.
- OOP and Scalability (ready to add more types of notifications).
- Manage requests to the Server by RESTful APIs.
- Unit testing
- For manual tests, register at least 3 users with different configurations.