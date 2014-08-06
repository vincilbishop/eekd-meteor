/**
 * Created by vincilbishop on 4/5/14.
 */

Future = Npm.require ('fibers/future');

Meteor.startup (
  function () {
    console.log ('NODE_ENV: ' + process.env.NODE_ENV);
  }
);

Meteor.startup (function () {
  App.version = Assets.getText ("version.txt");
});


Meteor.startup (function () {

  FacebookServerMethods.config ({
    appId: Meteor.settings.Facebook.appId,
    secret: Meteor.settings.Facebook.secret
  });

  LayerApi.config ({
    cert: Assets.getText ('layer/layer.crt'),
    key: Assets.getText ('layer/layer.key')
  });

  ModelSeed.seedModel();

});