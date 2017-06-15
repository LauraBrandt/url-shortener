# URL Shortener Microservice
_By Laura Brandt_

This is one of the API projects for [FreeCodeCamp](https://www.freecodecamp.com/challenges/url-shortener-microservice).

View the live version: <https://lb-url-shortener.herokuapp.com>

### User Stories:
* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
* When I visit that shortened URL, it will redirect me to my original link.

## How to use the app:
### To create the shortened URL
In the address bar, type `https://lb-url-shortener.herokuapp.com/new/<your url here>`

\*Note: Make sure your URL has the form `http://www.example.com`

__Example:__
```
https://lb-url-shortener.herokuapp.com/new/http://foo.com:80
```
You should see your new shortened URL output on the screen along with the original URL it will redirect to.

__Example:__
```json
{ 
  "Original URL": "http://foo.com:80",
  "Shortened URL": "https://lb-url-shortener.herokuapp.com/8170"
}
```

### To use the new URL
Simply copy the shortened URL from the last step into the address bar.

__Example:__
```
https://lb-url-shortener.herokuapp.com/8170
```
will redirect to:
```
http://foo.com:80
```

