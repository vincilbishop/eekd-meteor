/**
 * Created by vincilbishop on 6/19/14.
 */

/*
 https://github.com/mizzao/meteor-user-status
 connectionLogin with fields userId, connectionId, and ipAddr
 connectionLogout with fields userId and connectionId
 connectionIdle with fields userId, connectionId, and lastActivity
 connectionActive with fields userId, connectionId, and lastActivity
 */

UserStatus.events.on(
  'connectionLogin',
  function(user, connectionId, ipAddr){

    console.log('connectionLogin: [userId:' + JSON.stringify(user.userId)  + ' / connectionId:' + JSON.stringify(connectionId) + ' / ipAddr:' + JSON.stringify(ipAddr) + ']');

    Meteor.call('/energyscore/calculate',new Date(),user.userId,function(error, result){

    });


  });

UserStatus.events.on(
  'connectionLogout',
  function(user, connectionId){

    //console.log('connectionLogin: [userId:' + JSON.stringify(userId)  + ' / connectionId:' + JSON.stringify(connectionId) + ']');

  });

UserStatus.events.on(
  'connectionIdle',
  function(user, connectionId, lastActivity){

    //console.log('connectionIdle: [userId:' + JSON.stringify(userId)  + ' / connectionId:' + JSON.stringify(connectionId) + ' / lastActivity:' + JSON.stringify(lastActivity) + ']');

  });

UserStatus.events.on(
  'connectionActive',
  function(user, connectionId, lastActivity){

    //console.log('connectionActive: [userId:' + JSON.stringify(userId)  + ' / connectionId:' + JSON.stringify(connectionId) + ' / lastActivity:' + JSON.stringify(lastActivity) + ']');

  });