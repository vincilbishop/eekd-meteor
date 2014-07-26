/*****************************************************************************/
/* UpsertMyProfile Methods */
/*****************************************************************************/

Meteor.methods({
  /**
   * Created or updates a profile for the logged in user.
   *  @method '/app/upsert_my_profile'
   *  @param {Object} profileData A dictionary of profile object data that will be used to upsert the profile object.
   *  @returns TBD.
   *  @example response: TBD
   *  @discussion If a _id property is passed, the system will look for an object with that Id.
   *  If one is found the method will perform an update of that record.
   *  If no _id is passed, or no object is found then one is created.
   @memberof Server-Methods
   */
  '/app/upsert_my_profile': function (profileData) {

    }
});
