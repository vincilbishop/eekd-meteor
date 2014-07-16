/**
 * Created by vincilbishop on 7/16/14.
 */


Meteor.methods ({
  '/app/layer/createUser': function (userId, access_token) {
    /*
     [
     {
     "id": "ad648168-97e4-4648-8d53-964e9ccd0f61",
     "access_token": "7cc7ckD5Znz5w61kVaXm1pCnAL5kNh6WGbGiZ251"
     },
     {
     "id": "75c0f179-3bfd-4746-99cc-4901ef5e1387",
     "access_token": "MTdByBBtbgRudjHK49rw2RkWMOkpX5Jk6ZN34Z7R"
     },
     {
     "id": "b46bf8f8-6d96-422f-9cb8-a03214f3cffc",
     "access_token": "YUYoimWBnZ2kbBeNTsFc5UMlywxy61dKZiMAQdrZ",
     }
     ]
     */
    HTTP.call ("POST", "https://api-beta.layer.com/users",
      {
        headers: {
          'X-Application': 'njhR7Q3ELfAZENlr',
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        data: [
          {
            "id": "ad648168-97e4-4648-8d53-964e9ccd0f61",
            "access_token": "7cc7ckD5Znz5w61kVaXm1pCnAL5kNh6WGbGiZ251"
          }
        ],
        options: {
          cert: fs.readFileSync ('/Users/mmapp/client-2048.crt'),
          requestCert: false,
          rejectUnauthorized: false
        }
      },
      function (error, result) {

        if (error) {
          console.log ('https://api-beta.layer.com/users error: ' + JSON.stringify (error));
        } else {
          console.log ('https://api-beta.layer.com/users result: ' + JSON.stringify (result));
        }

      });
  }
})