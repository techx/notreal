<h1 align="center">
    <img width="672" alt="image" src="https://user-images.githubusercontent.com/17646399/217417255-f1bcf8fd-fa4e-4818-8380-044515d4843f.png">
</h1>

<div align="center">
	<a href="#overview">Overview</a>
  <span> • </span>
    	<a href="#installation">Installation</a>
  <span> • </span>
    	<a href="#additional-ideas">Additional Ideas</a>
  <span> • </span>
      <a href="#license">License</a>
</div>

<br />

NotReal is a React Native and Expo application and an incomplete clone of [BeReal](https://bere.al) made as a demo originally designed for teaching the mobile development learnathon track at [Blueprint 2023](https://blueprint.hackmit.org).

## Overview

NotReal is split into three primary screens:
- **Initial**: An initial screen which allows you to enter your handle
- **Feed**: The main screen of the application which shows a feed of all NotReal posts made so far
- **Camera**: A camera screen to make new posts

NotReal currently does not have a backend, but you can make one as an extra exercise at the end of the learnathon day! We recommend using a backend as a service such as [Firebase](https://firebase.google.com) or [Supabase](https://supabase.io).

NotReal was also developed with mobile platforms in mind (iOS and Android), so it may/may not work on web or with an emulator.

### File Structure

* `assets/` - All icons and static images are stored in this folder
* `components/` - Stores reusable React components which are not screens
* `contexts/` - Stores React context providers + hooks
* `data/` - Stores fake data used in application
* `navigation/` - Stores major React components used as alternate screens
* `App.js` - Main/Entrypoint React component
* `app.json` - Stores metadata for mobile application
* `package.json` - Tracks dependencies used in application


## Installation

### Node.js

React Native and Expo uses [Node.js](https://nodejs.org/en/download/) as the underlying JavaScript runtime. Install Node.js version 18 from the web page.

### Running

To run the application, first install dependencies then start it:

```
yarn install
yarn dev
```

## Additional Ideas

- Add persistence + a database using Firebase
- Add scheduled notifications using expo-notifications
- Add phone authentication using Firebase
- Add file uploading using Firebase

## License

NotReal is licensed under [MIT](./LICENSE). You may use and distribute this source code as long as it follows the guidelines set by the license.