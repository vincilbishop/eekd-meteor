/*****************************************************************************/
/* CreateEncounter Methods */
/*****************************************************************************/

Meteor.methods ({
  /**
   * Creates an encounter between two users in the system.
   *  @method '/app/create_encounter'
   *  @param {String} user2Id The user ID of the user seen by user1.
   *  @param {Number} latitude The latitude of user1 at the time user2 was encountered.
   *  @param {Number} longitude The longitude of user1 at the time user2 was encountered.
   *  @returns The id of the newly created encounter, or an error.
   *  @example response:
      {
        id = 2;
        msg = result;
        result = sSQ7oZjmwT5ZdNTYn;
      }

   *  @discussion The system will add a timestamp when the encounter is created.
   *  @todo Possibly add more fields to this method for distance, etc.
   @memberof Server-Methods
   */
  '/app/create_encounter': function (user2Id,latitude,longitude) {
    // Create an encounter
    if(!this.userId) {
      return new Meteor.Error (401, "unauthorized");
    }
    else
    {
      var encounter = {};
      encounter.createDate = new Date();
      encounter.user1Id = this.userId;
      encounter.user2Id = user2Id;
      encounter.coordinates2d = [latitude,longitude];
      return Encounter.insert(encounter);
    }
  }
});
