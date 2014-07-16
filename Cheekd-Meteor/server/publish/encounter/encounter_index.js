/*****************************************************************************/
/* EncounterIndex Publish Functions
/*****************************************************************************/

/** Returns the encounter collection
 * @method 'encounter_index'
 * @returns  {Collection} Returns the Encounter Collection.
 * @todo This method returns the Encounter Collection
 * @memberof Publish-Methods
 */
Meteor.publish('encounter_index', function () {
  // you can remove this if you return a cursor
  return Encounter.find();
});
