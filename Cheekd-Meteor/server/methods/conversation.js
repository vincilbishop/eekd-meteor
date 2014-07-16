/*****************************************************************************/
/* Conversation Methods */
/*****************************************************************************/

/** Creates a user Connection
 * @method '/app/conversation/create'
 * @param {string} displayName The conversation name.
 * @param {string} user1Id The userId that want to start a conversation.
 * @param {string} user2Id The userId of the user that is observed.
 * @todo with this method a user can start a new converstation with another user.
 * @memberof Server-Methods
 */
Meteor.methods({
  '/app/conversation/create': function (thisConversation) {

    // Create a conversation
      var conv = {};
      conv.createDate = new Date();
      conv.displayName = thisConversation.displayName;
      conv.user1Id = thisConversation.user1Id;
      conv.user2Id = thisConversation.user2Id;

      return Conversation.insert(conv);
  }
});
