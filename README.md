# Express Unsplash by Zinglecode

Express Web-API for Unsplash-Cloned Web-App (For Educational Purposes Only)

## Base URL

Every API is started at https://express-usp-api.herokuapp.com 
Responses are sent as JSON.

## API Documentation

* [Get photos](#get-photos)
* [Get a photo](#get-a-photo)
* [Get a user](#get-a-user)

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
https://express-usp-api.herokuapp.com/photos
```

#### Example response

```javascript
[
  {
    "id": 28,
    "uid": "ni053cn9vf",
    "width": 3150,
    "height": 2100,
    "description": null,
    "creditUser": "Alexey Topolyanskiy",
    "creditUserLink": "https://unsplash.com/@devilcoders?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
    "creditPhotoLink": "https://unsplash.com/photos/-oWyJoSqBRM",
    "createdAt": "2020-07-18T08:57:00.000Z",
    "updatedAt": "2020-07-18T08:57:00.000Z",
    "user": {
      "uid": "o4weapfvs4",
      "username": "jason555",
      "displayName": "Jason",
      "biography": "Normal is not an option",
      "avatarUrl": {
        "small": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80",
        "medium": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80",
        "large": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
        "creditUser": "Hello I'm Nik ?",
        "creditUserLink": "https://unsplash.com/@helloimnik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
        "creditPhotoLink": "https://unsplash.com/photos/6HzhFuiVO60"
      }
    },
    "url": {
      "thumbnail": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80",
      "small": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      "medium": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80",
      "large": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80",
      "original": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
    }
  },
  // More photos
]
```

### Get a photo

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
https://express-usp-api.herokuapp.com/photos/granwz490n
```

#### Example response

```javascript
{
  "id": 26,
  "uid": "granwz490n",
  "width": 3054,
  "height": 4319,
  "description": "Organic Vodka from Vodka Bornholm, Denmark",
  "creditUser": "Great Cocktails",
  "creditUserLink": "https://unsplash.com/@greatcocktails?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
  "creditPhotoLink": "https://unsplash.com/photos/JGpKCpXbIFw",
  "createdAt": "2020-07-16T12:38:00.000Z",
  "updatedAt": "2020-07-16T12:38:00.000Z",
  "user": {
    "uid": "4qtcj0irg3",
    "username": "simpleman",
    "displayName": "Simple Man",
    "biography": "No man can fly",
    "avatarUrl": {
      "small": "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80",
      "medium": "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80",
      "large": "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
      "creditUser": "Warren Wong",
      "creditUserLink": "https://unsplash.com/@wflwong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      "creditPhotoLink": "https://unsplash.com/photos/bh4LQHcOcxE"
    }
  },
  "url": {
    "thumbnail": "https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80",
    "small": "https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    "medium": "https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80",
    "large": "https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80",
    "original": "https://images.unsplash.com/photo-1594242090827-2132f706cef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
  }
}
```

### Get a user

Get user profile

```http
GET /users/:uid
```

#### Path parameters

Name | Required/Optional | Description
---- | ----------------- | -----------
uid | Required | Unique ID of the user

#### Query string parameters

Name | Required/Optional | Description
---- | ----------------- | -----------
latestPhotos | Optional | Set to 1 for included user's latest photos (Max at 12 photos) in the response

#### Example request

```
https://express-usp-api.herokuapp.com/users/o4weapfvs4
```

#### Example response

```javascript
{
  "uid": "o4weapfvs4",
  "username": "jason555",
  "displayName": "Jason",
  "biography": "Normal is not an option",
  "createdAt": "2020-06-26T15:53:00.000Z",
  "updatedAt": "2020-06-26T15:53:00.000Z",
  "avatarUrl": {
    "small": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80",
    "medium": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80",
    "large": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
    "creditUser": "Hello I'm Nik ?",
    "creditUserLink": "https://unsplash.com/@helloimnik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
    "creditPhotoLink": "https://unsplash.com/photos/6HzhFuiVO60"
  }
}
```
