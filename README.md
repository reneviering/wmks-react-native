# wmks-react-native (example app)

This is an example project beside my [@webmontagks](https://twitter.com/webmontagks) talk with the topic »React Native - native mobile apps with JavaScript«. ([Slides](https://slides.com/revrng/react-native))
It uses http://newsapi.org, an API for headlines of several news-sites like BBC, Hacker-News and so on. 

![](https://d17oy1vhnax1f7.cloudfront.net/items/0T3b1B233k0Z2v3O1P0g/Screen%20Recording%202016-08-25%20at%2008.41%20PM.gif?v=d4f2c8f8)

## Install Guide
These are the prerequisites for React Native. You can read more about the basic setup here: https://facebook.github.io/react-native/docs/getting-started.html#content
  
	$ brew install node
	$ brew install watchman
	$ npm install -g react-native-cli
	
Now clone the repo and install all npm dependencies:

	$ git clone https://github.com/revrng/wmks-react-native.git
	$ cd wmks-react-native && npm install

### Configuring the API-Key for https://newsapi.org
To use the JSON-API of https://newsapi.org you need to register an api-key (https://newsapi.org/register). Don't worry, it's free. 

To use the API-Key inside the project, you need to add the following file:

````
wmks-react-native/
├── env/
    └── apikey.js      → It's not under source control (#security)

````

The file `apikey.js` has the following structure:
```javascript
export default 'PLACE YOUR APIKEY HERE';
```
	
## Running the app
### on iOS
	$ react-native run-ios
### on Android
	$ react-native run-android	
	
## Have fun!
