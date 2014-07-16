Encounter = new Meteor.Collection('encounter', {

  'schema' : new SimpleSchema({

    createDate: {
      type: Date,
      label: 'createDate'
    },
    displayName: {
      type: String,
      label: 'displayName'
    },
    user1Id: {
      type: String,
      label: 'user1Id'
    },
    user2Id: {
      type: String,
      label: 'user2Id'
    }
  })
});


/*
 * Add query methods like this:
 *  Encounter.findPublic = function () {
 *    return Encounter.find({is_public: true});
 *  }
 */
