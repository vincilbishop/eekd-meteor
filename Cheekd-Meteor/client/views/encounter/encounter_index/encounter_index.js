/*****************************************************************************/
/* EncounterIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EncounterIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EncounterIndex.helpers({
    encounterDataTable: function () {
        return {
            id:'encounterDataTable',
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
                    title:"Cheekd's",
                    data:'displayName',
                    mRender: function(data,type,row){
                        var component;
                        component = UI.renderWithData(Template.imgChekeedTemplate, {
                            class:"color-brand-danger",
                            label:"3"
                        });
                        return component.render().toHTML();
                    }
                }
            ],
            subscription: 'conversations'
        }
    }
});

/*****************************************************************************/
/* EncounterIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.EncounterIndex.created = function () {
};

Template.EncounterIndex.rendered = function () {
};

Template.EncounterIndex.destroyed = function () {
};
