/**
 * Created by carlosvacamorales on 6/30/14.
 */
var conversationDataTable;
if (Meteor.isServer) {
    conversationDataTable = new DataTableComponent({
        subscription: "conversations",
        collection: Conversation
    });
    conversationDataTable.publish();
}