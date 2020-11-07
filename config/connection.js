
//Sampurna connection ek hdla tynne methana


var mysql = require('mysql');
var db;

var settings={

    host: "localhost",
    user: "root",
    password: "",
    database: "crudapp"

};

function connectDatabase(){

if(!db){

db=mysql.createConnection(settings);


db.connect(function (err){


    //connection ek wadada kyla check krnwa
if(!err){
console.log("Database connected");

}
else{
console.log("Error database connection");
}


})


}
return db;

}

//methanin connection ek export krnwa
module.exports=connectDatabase();

