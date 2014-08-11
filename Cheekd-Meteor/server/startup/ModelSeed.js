/**
 * Created by vincilbishop on 6/8/14.
 */

ModelSeed = {};

ModelSeed.seedModel = function(){

  // Users
  var userText = Assets.getText ("ModelSeed/Users.json");
  var users = JSON.parse (userText);
  var testUser;
  users.forEach (function (user) {
    var userAlreadyExists = typeof Meteor.users.findOne ({ username: user.username }) === 'object';

    if (!userAlreadyExists) {

      var result = Accounts.createUser (user);

      if (!testUser) {
        testUser = Meteor.users.findOne (result);
      }
    }
  });

  //Connections
  var AssetConnection = Assets.getText ("ModelSeed/Connections.json");
  var Connections = JSON.parse (AssetConnection);

  Connections.forEach (function (cnn) {
    var AlreadyExists = Connection.findOne (cnn._id);
    if (AlreadyExists == undefined) {
      cnn.user1Id = testUser._id;
      Connection.insert (cnn);
    }
  });

  //Conversation
  var AssetConversation = Assets.getText ("ModelSeed/conversation.json");
  var Conversations = JSON.parse (AssetConversation);

  Conversations.forEach (function (msg) {
    var AlreadyExists = Conversation.findOne (msg._id);
    if (AlreadyExists == undefined) {
      Conversation.insert (msg);
    }
  });


  //Encounter
  var AssetEncounter = Assets.getText ("ModelSeed/encounter.json");
  var Encounters = JSON.parse (AssetEncounter);

  Encounters.forEach (function (enc) {
    var AlreadyExists = Encounter.findOne (enc._id);
    if (AlreadyExists == undefined) {
      Encounter.insert (enc);
    }
  });

  //Message
  var AssetMessage = Assets.getText ("ModelSeed/message.json");
  var Messages = JSON.parse (AssetMessage);

  Messages.forEach (function (msg) {
    var AlreadyExists = Message.findOne (msg._id);
    if (AlreadyExists == undefined) {
      Message.insert (msg);
    }
  });

  /*
  //UserProfile
  var AssetProfile = Assets.getText ("ModelSeed/profile.json");
  var Profiles = JSON.parse (AssetProfile);

  Profiles.forEach (function (profile) {
    var AlreadyExists = UserProfile.findOne (profile._id);
    if (AlreadyExists == undefined) {
      UserProfile.insert (profile);
    }
  });
  */

  //Settings
  var AssetSettings = Assets.getText ("ModelSeed/settings.json");
  var Setts = JSON.parse (AssetSettings);

  Setts.forEach (function (setting) {
    var AlreadyExists = Settings.findOne (setting._id);
    if (AlreadyExists == undefined) {
      Settings.insert (setting);
    }
  });


  //Tags
  var AssetTags = Assets.getText ("ModelSeed/tag.json");
  var Tags = JSON.parse (AssetTags);

  Tags.forEach (function (tag) {
    var AlreadyExists = Tag.findOne (tag._id);
    if (AlreadyExists == undefined) {
      Tag.insert (tag);
    }
  });
}