/*****************************************************************************/
/* RegisterConversationForConnection Methods */
/*****************************************************************************/

Meteor.methods ({
  /**
   * Marks a connection as having had a conversation.
   *  @method '/app/register_conversation_for_connection'
   *  @param {String} connectionId The Id of a connection object to mark as having had a conversation.
   *  @returns A Boolean indicating whether the connection was updated or not.
   *  @example response success:
      {
          id = 2;
          msg = result;
          result = 1;
      }
     @example response failure:
     {
         id = 2;
         msg = result;
         result = 0;
     }
   *  @discussion It's necessary to know which connections have had a conversation in order to differentiate them in the UI.
   @memberof Server-Methods
   */
  '/app/register_conversation_for_connection': function (connectionId) {

    if (!this.userId)
      return new Meteor.Error(401, "Unauthorized");
    else {

      return Connection.update({_id:connectionId},{$set:{has_conversated:true}});
    }
  }
});
