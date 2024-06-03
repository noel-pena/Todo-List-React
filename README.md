# Todo List App

This is a Todo List application built using Vite and React for the frontend, and Node.js, Express, and MongoDB for the backend.

## Demo

With render free version, it does take about 1 minute to load for the first time. live site: https://todo-list-react-50js.onrender.com/

## Features

- Add, edit, and delete todo items
- View todos by day, week, or month
- Mark todo items as complete or incomplete

## Folder Structure

```plaintext
Todo-List-React/
│
├── client/
│   ├── components/
│   │   ├── sub-components/
│   │   │   ├── AddItem.jsx
│   │   │   ├── CheckBox.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Items.jsx
│   │   ├── Title.jsx
│   ├── pages/
│   │   ├── MonthNotes.jsx
│   │   ├── TodayNotes.jsx
│   │   ├── WeekNotes.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.html
│   └── vite.config.js
│
├── server/
│   ├── mongodb.js
│   ├── server.js
│
├── .env
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── ...
```

## API Endpoints

### Get All Items

- Endpoint: GET /api/items
- Description: Fetch all todo items for today.
- Response:
  - 200 OK: Returns an array of items.
  - 500 Internal Server Error: If there's an issue fetching the items.

### Add a New Item

- Endpoint: `POST /api/add`
- Description: Add a new todo item for today.
- Request Body:

```json
{
  "newItem": "Your new item title"
}
```

- Response:
  - 201 Created: Returns the newly created item.
  - 500 Internal Server Error: If there is an issue adding the item.

### Delete an Item

- Endpoint: DELETE /api/items/:id
- Description: Delete a todo item for today by its ID.
- Response:
  - 200 OK: Returns a success message.
  - 500 Internal Server Error: If there is an issue deleting the item.

EJS version github repo: https://github.com/noel-pena/ToDo-List-MongoDB
EJS version live site: https://todo-list-mongodb-fhh5.onrender.com
