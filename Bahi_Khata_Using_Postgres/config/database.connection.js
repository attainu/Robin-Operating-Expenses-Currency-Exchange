const Sequelize = require('sequelize'); 

// const database = new Sequelize("bahi_khata","postgres","",
//    {
//    host:'localhost',
//    dialect:'postgres'
//    }
// );  


const database = new Sequelize(
     "scmlqtrk",
     "scmlqtrk",
     "9x_L74qgEpjHqvDX4vu6AWx6tN3GSt3-",
     {
     host:'topsy.db.elephantsql.com',
     dialect:'postgres'
     }
);

//It will create the table if it is not exist
database.sync({
    force:false
})

module.exports = database
