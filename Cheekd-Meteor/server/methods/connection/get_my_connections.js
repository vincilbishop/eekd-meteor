/*****************************************************************************/
/* GetMyConnections Methods */
/*****************************************************************************/

Meteor.methods ({
  /**
   * Get the connections of the logged in user.
   *  @method '/app/get_my_connections'
   *  @param none.
   *  @returns A collection of connection objects belonging to the logged in user.
   *  @example response:
      {
        id = 2;
        msg = result;
        result =     (
           {
            "_id" = "connection_454534tt34";
            createDate =             {
                "$date" = 1407097963469;
            };
            encounterId = "test_encounter_cvbnbcvv";
            user1Id = vXTXSgj5M5TEhZCF3;
            user2Id = user1;
           }
        );
      }

   @memberof Server-Methods
   */
  '/app/get_my_connections': function () {

    if (!this.userId) {
      return new Meteor.Error (401, "unauthorized");
    }
    else {
      return Connection.find ({$or: [
        {user1Id: this.userId},
        {user2Id: this.userId}
      ]}).fetch ();
    }
  }

});
