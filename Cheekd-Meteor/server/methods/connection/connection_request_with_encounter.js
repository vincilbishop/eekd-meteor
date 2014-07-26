/*****************************************************************************/
/* ConnectionRequestWithEncounter Methods */
/*****************************************************************************/

Meteor.methods({
  /**
   * Requests that a connection be made with a user, based on an encounter.
   *  @method '/app/connection_request_with_encounter'
   *  @param {String} encounterId The Id of an encounter object to base the connection request on.
   *  @returns TBD.
   *  @example response: TBD
   @memberof Server-Methods
   */
 '/app/connection_request_with_encounter': function (encounterId) {

    // Create a connection
    if(!this.userId)
      return new Meteor.Error(401, "unauthorized");
    else{
      var cnn = {};
      cnn.createDate = new Date();

      cnn.userId = thisConnection.userId;

      return Connection.insert(cnn);
    }
  }


});
