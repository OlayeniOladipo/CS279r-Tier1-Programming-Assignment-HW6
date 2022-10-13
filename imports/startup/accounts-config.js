import { Accounts } from 'meteor/accounts-base';

// Settings for Meteor's accounts framework
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});