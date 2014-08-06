/*****************************************************************************/
/* GetEncountersForUser Methods */
/*****************************************************************************/

Meteor.methods ({
  /**
   * Gets a list of encounters that a userId has had.
   *  @method '/app/get_encounters_for_user'
   *  @param {String} userId The Id to retrieve encounters for.
   *  @returns An array of encounter objects where the user is either user1 or user2.
   *  @example response:
   {
     id = 2;
     msg = result;
     result =     (
         {
         "_id" = sSQ7oZjmwT5ZdNTYn;
         coordinates2d =             (
             "38.36084",
             "-81.6208"
         );
         createDate =             {
             "$date" = 1407096500466;
         };
         user1Id = 7Cart2oA6BeiWJDxX;
         user2Id = ikkkdr3o3EsMxrArR;
         }
     );
 }
   @memberof Server-Methods
   */
  '/app/get_encounters_for_user': function (userId) {

    if (!this.userId) {
      return new Meteor.Error (401, "unauthorized");
    }
    else {
      return Encounter.find ({$or: [
        {user1Id: userId},
        {user2Id: userId}
      ]}).fetch ();
    }

  }

});
