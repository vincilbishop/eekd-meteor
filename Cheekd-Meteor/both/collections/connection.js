Connection = new Meteor.Collection('connection', {

  'schema' : new SimpleSchema({

    createDate: {
      type: Date,
      label: 'createDate',
      defaultValue: new Date(),
      optional:true
    },
    user1Id: {
      type: String,
      label: 'user1Id'
    },
    user2Id: {
      type: String,
      label: 'user2Id'
    },
    encounterId: {
      type: String,
      label: 'encounterId'
    },
    has_conversated: {
      type: Boolean,
      label: 'has_conversated',
      defaultValue:false
    }
  })
});

/*
 * Add query methods like this:
 *  Connection.findPublic = function () {
 *    return Connection.find({is_public: true});
 *  }
 */
