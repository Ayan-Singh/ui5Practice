sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("bookstore.controller.Home", {
        onInit() {
        },
        onBookPress: function (oEvent) {
    // Get the item that was pressed
    var oItem = oEvent.getParameter("listItem");

    // Get the binding context (the book object)
    var oBook = oItem.getBindingContext().getObject();

    // Now you have the book data
    sap.m.MessageToast.show("You clicked on: " + oBook.Title);

    // Example: Navigate or log details
    console.log("Book details:", oBook);
}

    });
});