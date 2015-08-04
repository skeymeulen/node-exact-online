var util = require('util');


var SalesInvoice = exports.SalesInvoice = function (Client) {
  this.client = Client;

  return this;
};


// ---- SALES INVOICE BEGIN ----

/**
 * Get back account
 * @param  {String}   customerId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
SalesInvoice.prototype.getSalesInvoicesFromCustomer = function(customerId, division, callback) {
  var params = {
    $filter: 'InvoiceTo eq guid\''+ customerId +'\''
  };

  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/salesinvoice/SalesInvoices', 'GET', params, null, callback);
};


/**
 * Get back account
 * @param  {String}   salesInvoiceId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
SalesInvoice.prototype.getSalesInvoice = function(salesInvoiceId, division, callback) {
  var params = {
    $filter: 'InvoiceID eq guid\''+ salesInvoiceId +'\''
  };

  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/SalesInvoice/SalesInvoices', 'GET', params, null, callback);
};

/**
 * Alter a bank account
 * @param  {String}   salesInvoiceId  JSON Object with content saved
 * @param  {String}   userData        JSON Object with content saved
 * @param  {Integer}  division        Division ID 
 * @param  {Function} callback        Callback
 */
SalesInvoice.prototype.saveSalesInvoice = function(salesInvoiceId, userData, division, callback) {

  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/SalesInvoice/SalesInvoices(guid\'' + salesInvoiceId + '\')', 'PUT', null, userData, callback);
};

/**
 * Create Sales Invoice
 * @param {Object} fields   POST fields
 * @param {Integer} division Division ID
 * @param {Function} callback Gets called after request is complete
 */
SalesInvoice.prototype.createSalesInvoice = function(userData, division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/SalesInvoice/SalesInvoices', 'POST', null, userData, callback);
};

// ---- SALES INVOICE END ----

/**
 * Create printed sales invoice
 * @param  {Object}   fields   POST fields
 * @param  {Integer}   division Division ID
 * @param  {Function} callback Callback
 */
SalesInvoice.prototype.createPrintedSalesInvoice = function(fields, division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/SalesInvoice/PrintedSalesInvoices', 'POST', null, fields, callback);
};