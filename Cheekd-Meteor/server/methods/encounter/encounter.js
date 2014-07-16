/*****************************************************************************/
/* Encounter Methods */
/*****************************************************************************/

/** Creates an encounter between two users.
 * @method '/encounter/create'
 * @param {string} displayName The encounter name.
 * @param {string} user1Id The userId that observes and records the encounter.
 * @param {string} user2Id The userId of the user that is observed.
 * @todo possibly make this method merge duplicate encounters created between the same combination of users in the system at relatively the same time.
 * @memberof Server-Methods
 */

Meteor.methods({
  '/app/encounter/create': function (thisEncounter) {
    // Create an encounter 
    var encounter = {};
    encounter.createDate = new Date();
    encounter.displayName = thisEncounter.displayName;
    encounter.user1Id = thisEncounter.user1Id;
    encounter.user2Id = thisEncounter.user2Id;
    return Encounter.insert(encounter);
  }
});
