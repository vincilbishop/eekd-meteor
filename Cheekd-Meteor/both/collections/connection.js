Connection = new Meteor.Collection('connection', {

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
    userId: {
      type: String,
      label: 'userId'
    }
  })
});

/*
 * Add query methods like this:
 *  Connection.findPublic = function () {
 *    return Connection.find({is_public: true});
 *  }
 */
