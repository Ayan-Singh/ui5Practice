/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["bookstore/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
