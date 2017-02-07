var configValues = require('./config');

module.exports ={
  getDbConnectionString: function(){
     return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds139949.mlab.com:39949/nodetodohector';
  }
}