const mongoose =  require('mongoose');
const config = require('config');

mongoose.connect(config.get('mongoURI'), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(`Cannot connect to database! ${err}`));