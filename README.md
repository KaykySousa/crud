# Simple CRUD

A simple CRUD for study purposes

## Technologies

-   Node.js
-   TypeScript
-   Express
-   Sequelize

## API Documentation

#### Returns all users

```http
  GET /users
```

#### Returns a user by ID

```http
  GET /users/${id}
```

| Parameter | Type      | Description           |
| :-------- | :-------- | :-------------------- |
| `id`      | `integer` | **Required**. User ID |

#### Create a user

```http
  POST /users
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `name`    | `string` | **Required**. User name   |
| `email`   | `string` | **Required**. User e-mail |

#### Update a user

```http
  PATCH /users/${id}
```

| Parameter | Type      | Description                         |
| :-------- | :-------- | :---------------------------------- |
| `id`      | `integer` | **Required**. User ID to be updated |
| `name`    | `string`  | User name                           |
| `email`   | `string`  | User e-mail                         |

#### Delete a user

```http
  DELETE /users/${id}
```

| Parameter | Type      | Description                         |
| :-------- | :-------- | :---------------------------------- |
| `id`      | `integer` | **Required**. User ID to be deleted |
