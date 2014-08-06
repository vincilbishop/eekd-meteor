/**
 * Server Methods.
 * @namespace Server-Methods
 */

/**
 * Creates a Layer user
 *  @method '/app/layer/createUser'
 *  @param {String} userId The ID of the user to create in layer. Usually the user's Meteor ID
 *  @returns See example success and error objects.
 *  @see Official Layer API Documentation: https://docs-beta.layer.com/ios#backendapi
 *  @example success response:
    {
      "status":true,
      "users":[
      {
         "layer_id":"4cb2a445-0cb7-435e-8c9f-aff2a8361fa5",
         "remote_id":"TPaJhYvAmaDqW43JH"
      }
      ]
    }
    @example error response:
    {
      "status":false,
      "message":"User with id TPaJhYvAmaDqW43JH already exists",
      "error":"UserExists"
    }
    @example On successful creation the method writes layer information
    to the services node of the Meteor user record:
    {
      "layer":{
        "layer_id":"3eaaefca-eb7a-4d6e-9015-1fd2fc6d757d",
        "remote_id":"qLQoGuv5f3juva7Xi"
      }
    }
 @memberof Server-Methods
 */

/**
 * Authenticates or creates a user with a facebook token
 *  @method 'login'
 *  @param {Object} request An object with a single property, accessToken.
 *  @returns An object containing the Meteor User Id, the SRP (not facebook) token, and when the Meteor SRP token expiry timestamp.
 *  @discussion It is assumed that the user has granted email permissions to the app. If access to the user's email address has not been granted, a unique albeit non-functioning email address is created to identify the user.
 *  @example request:
 *  {
   *  accessToken: "CAAKdPZBWM9xkBA..."
   *  }
 *  @example response:
 *  {
   id = XXXdiCsMqyboijdt6;
   token = "XXXnEYfn-AGRYVECtYE32NrmfGIjGZHCOgL3fBLYAXV";
   tokenExpires =   {
      "$date"      = 1412787730256;
   };
   @memberof Server-Methods
 */