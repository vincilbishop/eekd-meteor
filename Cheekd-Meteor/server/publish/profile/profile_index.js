/*****************************************************************************/
/* ProfileIndex Publish Functions
/*****************************************************************************/

/** Returns the profile collection
 * @method 'profile_index'
 * @returns  {Collection} Returns the UserProfile Collection.
 * @todo This method returns the UserProfile Collection
 * @memberof Publish-Methods
 */
Meteor.publish('profile_index', function () {
  // you can remove this if you return a cursor
  return UserProfile.find();
});
