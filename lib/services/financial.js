var util = require('util');

var Financial = exports.Financial = function (Client) {
	this.client = Client;

	return this;
};

// ---- FINANCIAL CHECK INVOICES --- 

/**
 * Get back account
 * @param  {Integer}   ageGroup Age Group number
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
 * Get back account
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