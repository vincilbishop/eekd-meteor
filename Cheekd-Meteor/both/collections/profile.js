Profile = new Meteor.Collection('profile', {

  'schema' : new SimpleSchema({

    createDate: {
        type: Date,
        label: 'createDate',
        defaultValue: new Date(),
        optional:true
    },
    displayName: {
      type: String,
      label: 'displayName',
      optional:true
    },
    userId: {
      type: String,
      label: 'userId'
    },
    'services.layer': {
      type:Object,
      optional:true
    },
    'layer_id': {
      type:String
    }
  })
});


/*
 * Add query methods like this:
 *  Profile.findPublic = function () {
 *    return Profile.find({is_public: true});
 *  }
 */
