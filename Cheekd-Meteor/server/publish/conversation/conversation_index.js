/*****************************************************************************/
/* ConversationIndex Publish Functions
/*****************************************************************************/

/** Returns the conversation collection
 * @method 'conversation_index'
 * @returns  {Collection} Returns the Conversation Collection.
 * @todo This method returns the Conversation Collection
 * @memberof Publish-Methods
 */
Meteor.publish('conversation_index', function () {
  // you can remove this if you return a cursor
return Conversation.find();
});
