/*****************************************************************************/
/* ConnectionRequestWithEncounter Methods */
/*****************************************************************************/

Meteor.methods({
  /**
   * Requests that a connection be made with a user, based on an encounter.
   *  @method '/app/connection_request_with_encounter'
   *  @param {String} encounterId The Id of an encounter object to base the connection request on.
   *  @returns The Id of the newly created connection or an error.
   *  @example success response:
      {
        id = 2;
        msg = result;
        result = pGyZ3g4sFBSRya4pC;
      }
   *  @example error response:
      {
        id = 2;
        msg = result;
        result =     {
            error = 500;
            errorType = "Meteor.Error";
            message = "There already exists a connection for the user Ids associated with that encounterId. [500]";
            reason = "There already exists a connection for the user Ids associated with that encounterId.";
        }


   @memberof Server-Methods
   */
 '/app/connection_request_with_encounter': function (encounterId) {

    // Create a connection
    if(!this.userId)
      return new Meteor.Error(401, "Unauthorized");
    else {

      var encounter = Encounter.findOne(encounterId);

      if(!encounter){
        return new Meteor.Error(500, "The encounterId did not return an encounter.");
      }

      var existingConnection = Connection.findOne({user1Id:encounter.user1Id,user2Id:encounter.user2Id});

      if (existingConnection) {
        return new Meteor.Error(500, "There already exists a connection for the user Ids associated with that encounterId.");
      }

      var connection = {};
      connection.createDate = new Date();
      connection.encounterId = encounterId;
      connection.user1Id = encounter.user1Id;
      connection.user2Id = encounter.user2Id;

      var newConnectionId = Connection.insert(connection);

      return newConnectionId;
    }
  }


});
