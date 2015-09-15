var util = require('util');

var Financial = exports.Financial = function (Client) {
	this.client = Client;

	return this;
};

// ---- FINANCIAL CHECK INVOICES --- 

/**
 * Get aging receivables list. A list of journals that are not recieved yet.
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
Financial.prototype.receivablesList = function(accountId, division, callback) {
	var params = {
		$filter: 'AccountId eq guid\'' + accountId + '\''
	};

	if(typeof division === 'function') {
		callback = division;
		division = this.client.division;
	}

	this.client.sendRequest('/v1/' + division + '/read/financial/ReceivablesList', 'GET', params, null, callback);
};

/**
 * Get aging receivables list. A list of journals that are not recieved yet.
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
Financial.prototype.receivablesListByAgeGroup = function(ageGroup, accountId, division, callback) {
	var params = {
		ageGroup: ageGroup,
		$filter: 'AccountId eq guid\'' + accountId + '\''
	};

	if(typeof division === 'function') {
		callback = division;
		division = this.client.division;
	}

	this.client.sendRequest('/v1/' + division + '/read/financial/ReceivablesListByAgeGroup', 'GET', params, null, callback);
};

/**
 * Get aging receivables list. A list of journals that are not recieved yet.
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
Financial.prototype.receivablesListByInvoice = function(invoiceId, division, callback) {
	var params = {
		$filter: 'InvoiceNumber eq guid\'' + invoiceId + '\''
	};

	if(typeof division === 'function') {
		callback = division;
		division = this.client.division;
	}

	this.client.sendRequest('/v1/' + division + '/read/financial/ReceivablesList', 'GET', params, null, callback);
};

/**
 * Get aging receivables list. A list of journals that are not recieved yet.
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
Financial.prototype.agingReceivablesList = function(accountId, division, callback) {
	var params = {
		$filter: 'AccountId eq guid\'' + accountId + '\''
	};

	if(typeof division === 'function') {
		callback = division;
		division = this.client.division;
	}

	this.client.sendRequest('/v1/' + division + '/read/financial/AgingReceivablesList', 'GET', params, null, callback);
};

/**
 * Get aging receivables list. A list of journals that are not recieved yet.
 * @param  {Integer}  ageGroup Age Group number
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
Financial.prototype.agingReceivablesListByAgeGroup = function(ageGroup, accountId, division, callback) {
	var params = {
		ageGroup: ageGroup,
		$filter: 'AccountId eq guid\'' + accountId + '\''
	};

	if(typeof division === 'function') {
		callback = division;
		division = this.client.division;
	}

	this.client.sendRequest('/v1/' + division + '/read/financial/AgingReceivablesListByAgeGroup', 'GET', params, null, callback);
};

/**
 * Get aging payables list by age group. A list of journals that need to be payed yet.
 * @param  {Integer}  ageGroup Age Group number
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
Financial.prototype.agingPayablesListByAgeGroup = function(ageGroup, accountId, division, callback) {
	var params = {
		ageGroup: ageGroup,
		$select: accountId
	};

	if(typeof division === 'function') {
		callback = division;
		division = this.client.division;
	}

	this.client.sendRequest('/v1/' + division + '/read/financial/AgingPayablesListByAgeGroup', 'GET', params, null, callback);
};

/**
 * Get aging payables list. A list of journals that need to be payed yet.
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
Financial.prototype.agingPayablesList = function(accountId, division, callback) {
	var params = {
		$filter: 'AccountId eq guid\'' + accountId + '\''
	};

	if(typeof division === 'function') {
		callback = division;
		division = this.client.division;
	}

	this.client.sendRequest('/v1/' + division + '/read/financial/AgingPayablesList', 'GET', params, null, callback);
};

// --- /FINANCIAL CHECK INVOICES --- 