/*****************************************************************************/
/* UpsertMyProfile Methods */
/*****************************************************************************/

Meteor.methods ({
  /**
   * Created or updates a profile for the logged in user.
   *  @method '/app/upsert_my_profile'
   *  @param {Object} profileData A dictionary of profile object data that will be used to upsert the profile object.
   *  @returns The id of the upserted profile.
   *  @example response:
      {
        id = 2;
        msg = result;
        result = 5SLJHpSvAFkvv6DAL;
      }

   *  @discussion The system will look for a profile belonging to the logged in user..
   *  If one is found the method will perform an update of that record.
   *  If no object is found then one is created.
   @memberof Server-Methods
   */
  '/app/upsert_my_profile': function (profileData) {

    if (!this.userId)

      return new Meteor.Error(401, "Unauthorized");

    else {

      if(!profileData){
        profileData = {};
      }

      var result = Profile.upsertProfile(this.userId,profileData);

      return result;

    }
  }
});
