/*
 * Add query methods like this:
 *  Profile.findPublic = function () {
 *    return Profile.find({is_public: true});
 *  }
 */

Profile.upsertProfile = function (userId,profileData) {

  var existingProfile = Profile.findOne({userId:userId});

  var result;

  if(!profileData){
    profileData = {};
  }

  if (existingProfile){

    result = Profile.update (userId, {$set: profileData});

  } else {

    profileData.createDate = new Date();
    profileData.userId = userId;
    result = Profile.insert (profileData);
  }

  return result;
}


Profile.allow ({
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

Profile.deny ({
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
