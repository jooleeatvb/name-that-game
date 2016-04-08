import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/game.js';

Meteor.startup(function () {

    if (!Meteor.isClient) {
        return;
    }
    // Meteor.subscribe("games");
    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_ONLY'
    });

});