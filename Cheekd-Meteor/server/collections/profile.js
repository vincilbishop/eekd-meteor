/*
 * Add query methods like this:
 *  Profile.findPublic = function () {
 *    return Profile.find({is_public: true});
 *  }
 */

UserProfile.upsertProfile = function (userId,profileData) {

  var existingProfile = UserProfile.findOne({userId:userId});

  var result;

  if(!profileData){
    profileData = {};
  }

  if (existingProfile){

    result = UserProfile.update (userId, {$set: profileData});

  } else {

    profileData.createTimestamp = new Date();
    profileData.userId = userId;
    result = UserProfile.insert (profileData);
  }

  return result;
}


UserProfile.allow ({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

UserProfile.deny ({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
