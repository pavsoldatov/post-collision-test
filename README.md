## How to run this project 🚀

1. Clone the repository.
2. Run `npm run fakeserve` in the terminal. This will kickstart the json-server database with dummy data.
   The fake server can be accessed at `http://localhost:3004/hash/`. For more reference on how json-server package works, refer to
   [npmjs.com](https://www.npmjs.com/package/json-server).
3. Run `npm start` in the terminal to display the app on `http://localhost:3000/`.

For full list of scripts, refer to `/package.json`.

## Tech stack ⚙️

1. MUI5.
2. React + Typescript.
3. [randomColor.js](https://github.com/davidmerfield/randomColor) for avatar background colors.
4. [npmjs.com](https://www.npmjs.com/package/json-server) for fake data.
5. Fetch API.

## Idea 💡

The idea was to create a CRUD app that would communicate with a server.
The server offers data in two formats: standard object with content NOT respresented as array and object with content that IS represented as array as a result of hash collision. I took the liberty to hardcode the dummy data as I saw fit. However, at the moment of building this app, I had no information on how server was handling hash collisions.

The app is a simple form with a list of posts and two inputs (name, details) that can add posts.
In addition to name and details, a post POSTed to the server contains other information - id and date - which is generated in conformity with the server JSON format at the time of submission.

Posts can be deleted too. Deletion works in two ways: via DELETE request for data without collision and via PUT request for data with collision. In the latter case, the PUT will update the object for as long as its content key is an array. When it's not an array anymore, the object will be treated as if it were without a collision and will be deleted via DELETE altogether.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
