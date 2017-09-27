var config = {};

config.cloudant = {};
config.cloudant.dbname = 'cane_passport';
config.cloudant.account = 'b2aa73cb-446d-4bdb-9bf4-2e4896d6eb64-bluemix';
config.cloudant.password = 'd39b0f013db3b588eec226ee57363a7ed672ed822c790b26b608cbebaa159c0a';

config.admin_user = 'admin';
config.admin_pass = 'welcome';
config.index_field = 'username';
config.port = process.env.PORT || 3000;

module.exports = config;
