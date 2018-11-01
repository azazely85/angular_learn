// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCUorHRf5UQP3Ra5m6ROik05rsbWbMYdqU',
      authDomain: 'angular-learn-ff8be.firebaseapp.com',
      databaseURL: 'https://angular-learn-ff8be.firebaseio.com',
      projectId: 'angular-learn-ff8be',
      storageBucket: 'angular-learn-ff8be.appspot.com',
      messagingSenderId: '257734001729'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
