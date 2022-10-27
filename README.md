# Express Unsplash by Zinglecode

Express Web-API for Unsplash-Cloned web-app (for educational purposes only)

[Front-end web-app](https://github.com/potchangelo/next-unsplash)


## Table of Contents

* [How to Install and Run Offline](#how-to-install-and-run-offline)
* [Base URL Online](#base-url-online)
* [API Documentation](#api-documentation)
* [Credits](#credits)


## How to Install and Run Offline

0. Before running project, make sure that **Node.js** + **PostgreSQL** are installed and already setup on your machine. And the database in PostgreSQL is created already.

1. Download this project, then open project folder in code editor (VSCode or Anything).

2. Rename ".env.sample" file in project folder to ".env", then change database URL string to your config.

Template
```
DATABASE_URL="postgresql://{username}:{password}@{host}:{port}/{database}?schema=public"
```

Example
```
DATABASE_URL="postgresql://root:pass1234@localhost:5432/nodejs_express_unsplash?schema=public"
```

3. Open Terminal or Command Prompt at project folder, then install packages.

```
npm install
```

4. Type Prisma CLI command to updates database migrations and seeds sample data.

```
npx prisma migrate dev
```

5. Start running Node.js Express web-app.

```
npm run start
```


## Base URL Online

Every API is started at ----------. Responses are sent as JSON.


## API Documentation

* [Get photos](#get-photos)
* [Get photo](#get-photo)
* [Get random photo](#get-random-photo)
* [Get user](#get-user)

### Get photos

Get latest photos (Max at 12 photos).

```http
GET /photos
```

#### Query string parameters

Name | Required/Optional | Description
---- | ----------------- | -----------
beforeId | Optional | Get latest photos which id < beforeId.

#### Example request

```
-----------/photos
```

### Get photo

Get single photo

```http
GET /photos/:uid
```

#### Path parameters

Name | Required/Optional | Description
---- | ----------------- | -----------
uid | Required | Unique ID of the photo

#### Example request

```
----------/photos/mRIUGPTtA7
```


### Get random photo

Get single random photo

```http
GET /photos/random
```

#### Example request

```
----------/photos/random
```


### Get user

Get single user profile

```http
GET /users/:username
```

#### Path parameters

Name | Required/Optional | Description
---- | ----------------- | -----------
username | Required | Username of the user

#### Query string parameters

Name | Required/Optional | Description
---- | ----------------- | -----------
latestPhotos | Optional | Set to 1 for included user's latest photos (Max at 12 photos) in the response

#### Example request

```
----------/users/jason555
```


## Credits

The project was inspired by https://unsplash.com/. Every photos in API already included with credit for the author on Unsplash.

### Stack used in the project

- Node.js
- Express
- Prisma
- PostgreSQL
