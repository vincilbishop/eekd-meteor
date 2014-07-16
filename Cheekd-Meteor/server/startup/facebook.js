/**
 * Created by vincilbishop on 7/10/14.
 */

//FB = {};

Meteor.startup(function(){
/*
  FB = new Facebook({
    appId: Meteor.settings.Facebook.appId,
    secret: Meteor.settings.Facebook.secret
  });
*/
  FacebookServerMethods.config({
    appId: Meteor.settings.Facebook.appId,
    secret: Meteor.settings.Facebook.secret
  });


});