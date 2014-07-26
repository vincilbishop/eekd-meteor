/*****************************************************************************/
/* ConversationIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.Conversation_Index.events({
    'dblclick tr': function(e,tmpl){
        var tr = e.currentTarget;
        Session.set('message_id',this.self.$.api().row(tr).data());
        $("#messageModal").modal();
    }
});

Template.Conversation_Index.helpers({
    converstationDataTable: function () {
      return {
          id:'converstationDataTable',
          columns:[
              {
                  title:'From',
                  data:'displayName',
                  mRender: function(data,type,row){
                      return 'User';
                  }
              },
              {
                  title:'Create Date',
                  data:'createDate',
                  mRender: function(data, type, row) {
                      return moment(row.createDate).format("MM/DD/YYYY HH:MM:SS");
                  }
              },
              {
                  title:'Title',
                  data:'displayName',
                  mRender: function(data,type,row){
                      return 'Hello there';
                  }
              },
              {
                  title:'Text',
                  data:'displayName',
                  mRender: function(data,type,row){
                  return 'Hello men, how are you?';
              }
              }
          ],
          subscription: 'conversations'
      }
    }

});

/*****************************************************************************/
/* ConversationIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.Conversation_Index.created = function () {
};

Template.Conversation_Index.rendered = function () {
};

Template.Conversation_Index.destroyed = function () {
};
