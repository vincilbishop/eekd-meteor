/*****************************************************************************/
/* SettingsIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.SettingsIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.SettingsIndex.helpers({
     IcedTagsDataTable: function () {
       return {
           id:'IcedTagsDataTable',
           columns:[
               {
                   title:'From',
                   data:'displayName',
                   mRender: function(data, type, row) {
                       return "Sheyla";
                   }
               },
               {
                   title:'Date Sended',
                   data:'createDate',
                   mRender: function(data, type, row) {
                       return moment(row.createDate).format("MM/DD/YYYY HH:MM:SS");
                   }
               },
               {
                   title:'Text',
                   data:'displayName'
               },
               {
                   title:'Tag',
                   data:'displayName',
                   mRender: function(data, type, row) {
                       return "Love";
                   }
               }
           ],
           subscription: 'messages'
       }
     }

});

/*****************************************************************************/
/* SettingsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.SettingsIndex.created = function () {
};

Template.SettingsIndex.rendered = function () {
};

Template.SettingsIndex.destroyed = function () {
};
