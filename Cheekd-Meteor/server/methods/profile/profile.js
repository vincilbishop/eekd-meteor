/*****************************************************************************/
/* Profile Methods */
/*****************************************************************************/

/** Updates the user's profile
 * @method '/encounter/create'
 * @param {string} displayName The profile name.
 * @param {string} user1Id The userId of the profile
 * @todo updates the user's profile
 * @memberof Server-Methods
 */

Meteor.methods({

  '/app/profile/Update': function (thisProfile) {
    return Profile.update(thisProfile.userId,{$set:{ displayName: thisProfile.displayName }});
  }
});
