import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';
import '../imports/startup/accounts-config.js';

// Where the app begins on the client side.
// A javascript entry point.
// Meteor.startup runs after all the server code is executed.
Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});