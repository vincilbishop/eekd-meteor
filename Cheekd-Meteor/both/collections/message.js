Message = new Meteor.Collection('message', {

  'schema' : new SimpleSchema({

    createDate: {
        type: Date,
        label: 'createDate',
        defaultValue: new Date(),
        optional:true
    },
    text: {
      type: String,
      label: 'text'
    },
    user1Id: {
      type: String,
      label: 'user1Id'
    },
    user2Id: {
      type: String,
      label: 'user2Id'
    },
    conversationId: {
      type: String,
      label: 'conversationId'
    }
  })
});


/*
 * Add query methods like this:
 *  Message.findPublic = function () {
 *    return Message.find({is_public: true});
 *  }
 */
