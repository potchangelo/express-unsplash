# Express Unsplash by Zinglecode

Express Web-API for Unsplash-Cloned Web-App (For Educational Purposes Only)

## API Documentation

### Get Started

The API is available at https://express-usp-api.herokuapp.com/. Responses are sent as JSON.

### Get Photos

Get Photos (Max photo = 12)

#### Example Request

```http
https://express-usp-api.herokuapp.com/photos
```

#### Response

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
      "avatar": {
        "urlSmall": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80",
        "urlMedium": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80",
        "urlLarge": "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
        "creditUser": "Hello I'm Nik ?",
        "creditUserLink": "https://unsplash.com/@helloimnik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
        "creditPhotoLink": "https://unsplash.com/photos/6HzhFuiVO60"
      }
    },
    "photoUrl": {
      "urlThumbnail": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80",
      "urlSmall": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      "urlMedium": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80",
      "urlLarge": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80",
      "urlOriginal": "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
    }
  }
]
```
