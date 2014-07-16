/**
 * Created by vincilbishop on 4/5/14.
 */

Future = Npm.require('fibers/future');

Meteor.startup(
  function(){
    // console.log('process.env: ' + JSON.stringify(process.env));
    console.log('NODE_ENV: ' + process.env.NODE_ENV);
  }
);

Meteor.startup(function(){
  App.version = Assets.getText("version.txt");
});