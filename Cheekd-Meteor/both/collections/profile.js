Profile = new Meteor.Collection('profile', {

  'schema' : new SimpleSchema({

    createDate: {
      type: Date,
      label: 'createDate'
    },
    displayName: {
      type: String,
      label: 'displayName'
    },
    userId: {
      type: String,
      label: 'userId'
    }
  })
});


/*
 * Add query methods like this:
 *  Profile.findPublic = function () {
 *    return Profile.find({is_public: true});
 *  }
 */
