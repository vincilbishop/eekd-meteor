/**
 * Created by carlosvacamorales on 6/28/14.
 */
var inboxDataTable;
/* */
if (Meteor.isServer) {
    inboxDataTable = new DataTableComponent({
        subscription: "messages",
        collection: Message
    });
    inboxDataTable.publish();
}