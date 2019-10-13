const mongoose = require('mongoose');
const URI = 'mongodb://rene:emar16198@ds249311.mlab.com:49311/standing';
//const URI = 'mongodb://rene:emar16198@ds141209.mlab.com:41209/standing2';
//mongodb://<dbuser>:<dbpassword>@ds141209.mlab.com:41209/standing2 Temporada2
//const URI = 'mongodb://localhost/standing';


mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;