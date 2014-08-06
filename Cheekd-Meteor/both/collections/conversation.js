Conversation = new Meteor.Collection('conversation', {

  'schema' : new SimpleSchema({

    createDate: {
        type: Date,
        label: 'createDate',
        defaultValue: new Date(),
        optional:true
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
 *  Conversation.findPublic = function () {
 *    return Conversation.find({is_public: true});
 *  }
 */
