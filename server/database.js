const mongoose = require('mongoose');
const URI = 'mongodb://rene:emar16198@ds249311.mlab.com:49311/standing';
//const URI = 'mongodb://localhost/standing';


mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;