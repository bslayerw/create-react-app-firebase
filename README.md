# hueapifirebase [![NPM version](https://badge.fury.io/js/hueapifirebase.svg)](https://npmjs.org/package/hueapifirebase) [![Build Status](https://travis-ci.org/bslayerw/hueapifirebase.svg?branch=master)](https://travis-ci.org/bslayerw/hueapifirebase)

> create-react-app with firebase boilerplate

## Installation

```sh
git clone https://github.com/bslayerw/create-react-app-firebase.git
cd create-react-app-firebase
npm install
mv fire.config.example.js fire.config.js
# windows `rename fire.config.exmaple.js fire.config.js`
# or yarn install
```

## Usage
Read the documentation on [create-react-app](https://github.com/facebookincubator/create-react-app)
Read the documenation on [firebase](https://firebase.google.com/docs/web/setup). You will need to update `fire.config.js` with your firebase configuration. Once that's done this should get your going with an inital react app and a firebase setup. There's a simple example in App.js that creates messages and adds them to your firebase database.

## Additional Tasks

### Build for deploy and serve locally
```sh
npm run start
# or `yarn start`
```

### build for deploy and deploy to firebase 
```sh
npm run build:deploy
```

### Deploy 
```sh
npm run build:deploy
```

## License

MIT © [Byron Wright](https://about.me/byronwright)
