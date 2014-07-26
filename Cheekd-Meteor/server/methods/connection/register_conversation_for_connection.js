/*****************************************************************************/
/* RegisterConversationForConnection Methods */
/*****************************************************************************/

Meteor.methods ({
  /**
   * Marks a connection as having had a conversation.
   *  @method '/app/register_conversation_for_connection'
   *  @param {String} connectionId The Id of a connection object to mark as having had a conversation.
   *  @returns TBD.
   *  @example response: TBD
   *  @discussion It's necessary to know which connections have had a conversation in order to differentiate them in the UI.
   @memberof Server-Methods
   */
  '/app/register_conversation_for_connection': function (connectionId) {

  }
});
