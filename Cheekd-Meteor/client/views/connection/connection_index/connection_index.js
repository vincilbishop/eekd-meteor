/*****************************************************************************/
/* ConnectionIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.ConnectionIndex.events({
    'click #plus': function(e,tmpl){
        var tr = e.currentTarget;
        $("#connectionModal").modal();
    },
    'click #getcheeke': function(e,tmpl){
        var tr = e.currentTarget;
        $("#connectionModal").modal('toggle');
        $('#resultModal').modal();
    }
});

Template.ConnectionIndex.helpers({
    ConnectionDataTable: function(){
        return{
            id: "ConnectionDataTable",
            columns:[
                {
                    title: "Users Avatar",
                    data: "Avatar",
                    mRender: function(data,type,row){
                        var component;
                        component = UI.renderWithData(Template.imgTemplate, {
                            src: "http://peoplecd.com/wp-content/uploads/2012/10/home_6.jpg",
                            label:"Carlos Vaca"
                        });
                        return component.render().toHTML();
                    }
                },
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
                    title:'Location',
                    data:'displayName'
                },
                {
                    title:'Last Message',
                    data:'displayName',
                    mRender: function(data, type, row) {
                        return "Hey!";
                    }
                }
            ],
            subscription: 'messages'
        }
    }

});

/*****************************************************************************/
/* ConnectionIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ConnectionIndex.created = function () {
};

Template.ConnectionIndex.rendered = function () {
};

Template.ConnectionIndex.destroyed = function () {
};
