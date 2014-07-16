/**
 * Created by vincilbishop on 6/8/14.
 */

Meteor.startup(function(){

  // Users
  var userText = Assets.getText("ModelSeed/Users.json");
  var users = JSON.parse(userText);

  users.forEach(function(user){
    var userAlreadyExists = typeof Meteor.users.findOne ({ username: user.username }) === 'object';

    if (!userAlreadyExists) {

      var result = Accounts.createUser (user);
    }
  });

  // Users
  var connectionText = Assets.getText("ModelSeed/Connections.json");
  var connections = JSON.parse(connectionText);

  connections.forEach(function(connection){
    var exists = Connection.findOne(connection._id);

    if(exists == undefined){
      var result = Connection.insert(connection);
    }
  });

});