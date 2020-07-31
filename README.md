# Express Unsplash by Zinglecode

Express Web-API for Unsplash-Cloned Web-App (For Educational Purposes Only)

## Base URL

Every API is started at https://express-usp-api.herokuapp.com 
Responses are sent as JSON.

## API Documentation

### Get Photos

Get Photos (Max photo = 12)

```http
/photos
```

#### Query String Parameters

Name | Required/Optional | Description
---- | ----------------- | -----------
beforeId | Optional | Get photos which id < beforeId (Use for infinite scroll). If not included, API will return latest 12 photos

#### Example Request

```http
https://express-usp-api.herokuapp.com/photos
```

#### Example Response

```json
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
  ... more photos
]
```
