/*****************************************************************************/
/* MessageIndex: Event Handlers and Helpers */
/*****************************************************************************/
Session.setDefault('message_id',null);
Template.MessageIndex.events({
    'dblclick tr': function(e,tmpl){
        var tr = e.currentTarget;
        Session.set('message_id',this.self.$.api().row(tr).data());
        $("#messageModal").modal();
    }
});

Template.MessageIndex.helpers({
    InboxDataTable: function(){
        return{
            id: "myPostsByTags",
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
/* MessageIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.MessageIndex.created = function () {
};

Template.MessageIndex.rendered = function () {
};

Template.MessageIndex.destroyed = function () {
};
