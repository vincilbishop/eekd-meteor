/*****************************************************************************/
/* Connection Methods */
/*****************************************************************************/

/** Creates a user Connection
 * @method '/app/connection/create'
 * @param {string} displayName The connection name.
 * @param {string} userId The userId that creates the connection.
 * @todo with this method a user can create a new connection.
 * @memberof Server-Methods
 */
Meteor.methods({
  '/app/connection/create': function (thisConnection) {

    // Create a connection
    var cnn = {};
    cnn.createDate = new Date();
    cnn.displayName = thisConnection.displayName;
    cnn.userId = thisConnection.userId;

    return Connection.insert(cnn);
  }
});