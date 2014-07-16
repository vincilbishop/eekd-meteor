/*****************************************************************************/
/* Message Methods */
/*****************************************************************************/

/** Send a text message
 * @method '/app/message/send'
 * @param {string} text The message text.
 * @param {string} user1Id The userId that sends the text message.
 * @param {string} user2Id The userId that receives the text message.
 * @param {string} conversationId The conversation Id.
 * @todo with this method a user can send a text message to another user.
 * @memberof Server-Methods
 */
Meteor.methods({
  '/app/message/send': function (thisMessage) {

    // Create an encounter
      var msg = {};
      msg.createDate = new Date();
      msg.text = thisMessage.text;
      msg.user1Id = thisMessage.user1Id;
      msg.user2Id = thisMessage.user2Id;
      msg.conversationId = thisMessage.conversationId;

      return Message.insert(msg);
  }
});
