Event Managemnet Website :

This is a web-based application for planning events. Users can sign up or log in, create, update, and delete events, view their events, and sort them by name or date. Each date can only have up to 5 events. The project is built using Next.js with TypeScript as the language and MongoDB as the database.

Technologies :

This application was built using:

Next.js
TypeScript
MongoDB

Requirements :

Node.js (version 10 or higher)
npm or yarn
MongoDB database

Installation :
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/Owias-Sheikh/Event-Management_Website.git

Install the required dependencies by running the following command in the project directory:

Copy code
npm install

Edit the .env.local file in the project directory with your MongoDB connection details:

makefile
Copy code
MONGODB_URI=<your-mongodb-uri>
MONGODB_DB=<your-mongodb-database-name>
Build and run the application using the following command:

arduino
Copy code
npm run dev
The application will run on http://localhost:3000.

APIs : 

This project also includes APIs for accessing user and event data:

User API :

GET /api/users - Get all users
GET /api/users/:id - Get a specific user by ID
POST /api/users - Create a new user
PUT /api/users/:id - Update an existing user by ID
DELETE /api/users/:id - Delete a user by ID

Event API :

GET /api/events - Get all events for the currently logged in user
GET /api/events/:id - Get a specific event by ID
POST /api/events - Create a new event
PUT /api/events/:id - Update an existing event by ID
DELETE /api/events/:id - Delete an event by ID

Usage : 

Sign up or log in to the application.
Create a new event by clicking on the "Create Event" button on the dashboard.
Edit or delete an event by clicking on the respective buttons next to the event on the dashboard.
View your events on the dashboard or sort them by name or date using the sorting dropdown.

Credits :

This project was created by Owais Raza.
