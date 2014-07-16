/*****************************************************************************/
/* ProfileIndex Publish Functions
/*****************************************************************************/

/** Returns the profile collection
 * @method 'profile_index'
 * @returns  {Collection} Returns the Profile Collection.
 * @todo This method returns the Profile Collection
 * @memberof Publish-Methods
 */
Meteor.publish('profile_index', function () {
  // you can remove this if you return a cursor
  return Profile.find();
});
