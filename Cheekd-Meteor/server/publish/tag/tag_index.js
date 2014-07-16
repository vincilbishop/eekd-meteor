/*****************************************************************************/
/* TagIndex Publish Functions
/*****************************************************************************/

/** Returns the tag collection
 * @method 'tag_index'
 * @returns  {Collection} Returns the Tag Collection.
 * @todo This method returns the Tag Collection
 * @memberof Publish-Methods
 */
Meteor.publish('tag_index', function () {
  // you can remove this if you return a cursor
  return Tag.find();
});
