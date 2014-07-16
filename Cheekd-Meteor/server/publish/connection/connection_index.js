/*****************************************************************************/
/* ConnectionIndex Publish Functions
/*****************************************************************************/



/**
 * Subscribes the client to all connection collection objects.
 * @method 'connection_index'
 * @memberof Publish-Methods
 */

Meteor.publish('connection_index', function () {
  // you can remove this if you return a cursor
  return Connection.find();
});
