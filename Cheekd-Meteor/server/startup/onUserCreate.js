
Accounts.onCreateUser(function(options, user) {

  console.log('Creating user: ' + JSON.stringify(user));

  //UserProfile.createProfile(user._id);

  // Create Layer User
  var result = Meteor.call('/app/layer/createUser',user._id);

  console.log('layer result: ' + JSON.stringify(result));

  var layer_id = result.users[0].layer_id;

  // Create user profile
  UserProfile.upsertProfile(user._id, {layer_id: layer_id});

  // Get facebook info

  return user;

});