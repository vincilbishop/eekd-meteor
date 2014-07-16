/*****************************************************************************/
/* SettingsIndex Publish Functions
/*****************************************************************************/

/** Returns the settings collection
 * @method 'settings_index'
 * @returns  {Collection} Returns the Settings Collection.
 * @todo This method returns the Profile Collection
 * @memberof Publish-Methods
 */
Meteor.publish('settings_index', function () {
  // you can remove this if you return a cursor
   return Settings.find();
});
