
# To-Do List API

This is the backend part of a full-stack To-Do List web application built using **Node.js** and **Express**. It provides RESTful API endpoints to manage tasks.



## Features

- Create new tasks
- Retrieve all tasks
- Update existing tasks
- Delete tasks

## Project Structure

- `server/`: Contains the backend API code.

## Requirements

- Node.js (v16.x or higher)
- npm or yarn


### 1. Clone the Repository

If you haven't cloned the repository yet, do so by running:

```bash
git clone https://github.com/devajaypatidar/nextJSTodo.git
cd nextJSTodo/server
```


## Installation

Install my-project with npm

```bash
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
`DB_USER`
`DB_HOSTNAME`
`DB_NAME`
`DB_PASSWORD`
`DB_PORT`



## API Documentation 
The backend API provides the following endpoints:

- `GET /api/tasks`: Retrieve all tasks
- `POST /api/tasks`: Add a new task
- `PUT /api/tasks/:id`: Edit an existing task
- `DELETE /api/tasks/:id`: Delete a task
## Tech Stack

**Server:** Node, Express,  Postgres

