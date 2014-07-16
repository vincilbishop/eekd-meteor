/*****************************************************************************/
/* Tag Methods */
/*****************************************************************************/

/** Create new Tag
 * @method '/app/tag/create'
 * @param {string} displayName the Tag name.
 * @param {string} userId that creates the tag.
 * @todo with this method a user can create a new Tag.
 * @memberof Server-Methods
 */
Meteor.methods({
  '/app/tag/create': function (thisTag) {

    // Create a tag
      var tag = {};
      tag.createDate = new Date();
      tag.displayName = thisTag.displayName;
      tag.userId = thisTag.userId;

      return Tag.insert(tag);
  }
});
