/*****************************************************************************/
/* MessageIndex Publish Functions
/*****************************************************************************/

/** Returns the message collection
 * @method 'message_index'
 * @returns  {Collection} Returns the Message Collection.
 * @todo This method returns the Message Collection
 * @memberof Publish-Methods
 */
Meteor.publish('message_index', function () {
  // you can remove this if you return a cursor
  return  Message.find();
});
