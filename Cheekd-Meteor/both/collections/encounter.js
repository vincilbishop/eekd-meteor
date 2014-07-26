Encounter = new Meteor.Collection ('encounter', {

  'schema': new SimpleSchema ({

    createDate: {
      type: Date,
      label: 'createDate'
    },
    user1Id: {
      type: String,
      label: 'user1Id'
    },
    user2Id: {
      type: String,
      label: 'user2Id'
    },
    coordinates2D: {
      label: '2D Coordinates',
      type: [Number],
      decimal: true,
      index: "2d"
    }
  })
});


/*
 * Add query methods like this:
 *  Encounter.findPublic = function () {
 *    return Encounter.find({is_public: true});
 *  }
 */
