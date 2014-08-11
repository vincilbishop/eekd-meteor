/*****************************************************************************/
/* GetProfileForUser Methods */
/*****************************************************************************/

Meteor.methods ({
  /**
   * Gets a profile for a user.
   *  @method '/app/get_profile_for_user'
   *  @param {String} userId The Id to retrieve the profile of.
   *  @returns An object representing the profile corresponding to the user.
   *  @example response:
      {
        id = 2;
        msg = result;
        result =     {
            "_id" = sGHkS6iYXXJg8ZMCZ;
            createDate =         {
                "$date" = 1407330010691;
            };
            "layer_id" = "c10a3490-7d67-4958-89d8-32ef0e5ec3cf";
            userId = X3GhuB2SsfC3yJzru;
            ...
        };
      }

   @memberof Server-Methods
   */
  '/app/get_profile_for_user': function (userId) {

    if (!this.userId)

      return new Meteor.Error(401, "Unauthorized");

    else {

      return UserProfile.findOne({userId:userId});

    }
  }

});
