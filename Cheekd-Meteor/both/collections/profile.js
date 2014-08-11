UserProfile = new Meteor.Collection('userprofile', {

  'schema' : new SimpleSchema({

    createTimestamp: {
        type: Date,
        label: 'createDate',
        defaultValue: new Date(),
        optional:true
    },
    userId: {
      type: String,
      label: 'userId'
    },
    layer_id: {
      type:String,
      label: 'layer_id'
    },
    ageStart: {
      type:Number,
      label: 'ageStart',
      optional:true
    },
    ageEnd: {
      type:Number,
      label: 'ageEnd',
      optional:true
    },
    biography: {
      type:String,
      label: 'biography',
      optional:true
    },
    cityOrigin: {
      type:String,
      label: 'cityOrigin',
      optional:true
    },
    currentCity: {
      type:String,
      label: 'currentCity',
      optional:true
    },
    interestedInGender: {
      type:Number,
      label: 'interestedInGender',
      optional:true
    },
    kindOfRelationship: {
      type:String,
      label: 'kindOfRelationship',
      optional:true
    },
    newMessageNotificationPreference: {
      type:Number,
      label: 'newMessageNotificationPreference',
      optional:true
    },
    pets: {
      type:String,
      label: 'pets',
      optional:true
    },
    tagNotificationsPreference: {
      type:Number,
      label: 'tagNotificationsPreference',
      optional:true
    },
    workDescription: {
      type:String,
      label: 'workDescription',
      optional:true
    }

  })
});


/*
 * Add query methods like this:
 *  UserProfile.findPublic = function () {
 *    return UserProfile.find({is_public: true});
 *  }
 */
