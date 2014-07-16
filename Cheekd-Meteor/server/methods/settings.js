/*****************************************************************************/
/* Settings Methods */
/*****************************************************************************/

/** Update user Settings
 * @method '/app/settings/update'
 * @param {string} displayName The setting text.
 * @todo with this method a user can update their settings.
 * @memberof Server-Methods
 */
Meteor.methods({
  '/app/settings/update': function (settings) {

    // update settings
    return Settings.update(settings.userId,{$set:{ displayName: settings.displayName }});
  }
});