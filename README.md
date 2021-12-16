# Authentication-NodeJS

To install run:
npm install

To populate the DB with dummy data run:
node seed.js
This will clear and add users from users.json
Passwords are hashed, use:
123456 to login as abril@gmail.com
abc123 to log in as sara@gmail.com
Your can also create new users through the app

To execute the program run:
npm run server
in the terminal you should see 'MONGODB is Connected'

Go to http://localhost:3000

login url:
http://localhost:3000/login

signup url:
http://localhost:3000/signup

Once you login or signup a token will be displayed on the screen just for the purpose of this exercise

http://localhost:3000/welcome is a protected route
It has been tested on postman:

GET request to http://localhost:3000/welcome

Add Headers:
key: Authorization
value: Bearer 'your token'
You get a welcome message in the response body
