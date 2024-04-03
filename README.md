## Todo List React App - README

This document describes the source code of a simple React to-do list app.

### Features

* The app allows you to add new tasks.
* Added tasks appear in the "In Progress" list.
* You can mark tasks as completed, moving them to the "Done" list.
* Completed tasks can be unmarked, returning to the "In Progress" list.
* Tasks have automatic creation date and time.
* The "In Progress" and "Done" lists can be toggled using buttons.

### Technologies used

* React
* React Hooks (useState)

### Code structure

The code is organized in the functional component `Home`.

The component state is managed by four useState:

* `andamento`: array of objects representing in-progress tasks (contains task date and description).
* `feito`: array of objects representing completed tasks (contains task date and description).
* `item`: string representing the new task to be added.
* `onActive`: string representing the active list ("andamento" or "feito").

The component has functions to:

* `adicionarItem`: Add a new task to the "In Progress" list.
* `itemConcluido`: Move a task from "In Progress" to "Done".
* `removerItem`: Remove a task from the "In Progress" list.
* `undoItem`: Move a task from "Done" to "In Progress".

### How to run the code

1. Make sure you have Node.js and npm (or yarn) installed on your machine.
2. Clone the repository containing the application source code.
3. Navigate to the project folder in the terminal.
4. Run the command `npm install` (or `yarn install`) to install the project dependencies.
5. Run the command `npm start` (or `yarn start`) to start the application in development. The application will be accessible at http://localhost:3000 by default.

## Getting Started

Hit the run button to start the development server.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on `/api/hello`. This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Productionizing your Next App

To make your next App run smoothly in production make sure to deploy your project with [Repl Deployments](https://docs.replit.com/hosting/deployments/about-deployments)!

You can also produce a production build by running `npm run build` and [changing the run command](https://docs.replit.com/programming-ide/configuring-repl#run) to `npm run start`.
