/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'none',
  routeControllerNameConverter: 'upperCamelCase',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});

Router.map(function () {
  this.route('home', {path: '/', template:'Home'});
  this.route('sign-in', {path: '/sign-in'});
  this.route('sign-out', {path: '/sign-out'});
  this.route('tag.index', {path: '/tags'});
  this.route('profile.index', {path: '/profile', template:'ProfileIndex'});
  this.route('connection.index', {path: '/connections', template:'ConnectionIndex'});
  this.route('conversation.index', {path: '/conversations', template:'ConversationIndex'});
  this.route('message.index', {path: '/messages', template:'MessageIndex'});
  this.route('settings.index', {path: '/settings', template: 'SettingsIndex'});
  this.route('encounter.index', {path: '/encounters'});
});
