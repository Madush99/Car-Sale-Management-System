var createError = require('http-errors');
var express = require('express');
var path = require('path');
fileUpload = require('express-fileupload');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swal=require('sweetalert');


 hbs=require('express-handlebars');
 
 
//Helitha
var Home = require('./routes/Sashika_Vehicle/front1');
var get_vehicle = require('./routes/Sashika_Vehicle/vehicleProfile');
var Sashikaaddvehicle = require('./routes/Sashika_Vehicle/Sashika_Add_Vehicle');
var vehicle_index_redirect = require('./routes/Sashika_Vehicle/redirect_vehicle');


var Sashika_editvehi_Page = require('./routes/Sashika_Vehicle/Sashika_Vehicl_Edit');
var Sashika_updatevehicle = require('./routes/Sashika_Vehicle/Sashika_vehicle_update');
var Sashika_deleteVehicle = require('./routes/Sashika_Vehicle/Sashika_vehicle_delete');





 var SpareHome = require('./routes/Sashika_Spare_parts_Home');
var indexRouter = require('./routes/Admin/Admin');
var Chart = require('./routes/Admin/Chart');

var sashikaaa=require('./routes/Pages/Sashika_spare');

var Auth = require('./routes/Login/employee_login');
var Register = require('./routes/Login/Register_navigation');
var Regnew = require('./routes/Login/Register_Employees');



//Monthly Report
var Report = require('./routes/Admin/Report/Report');
var ShashikaVReport = require('./routes/Admin/Report/ShashikaVReport');
var ShashikaSReport = require('./routes/Admin/Report/ShashikaSReport');
var SellersVReport = require('./routes/Admin/Report/SellersVReport');


var SellersSReport = require('./routes/Admin/Report/SellersSReport');
var sellerReport = require('./routes/Admin/Report/sellerReport');
var EmpReport = require('./routes/Admin/Report/EmpReport');


//Users
var usersRouter = require('./routes/Admin/User/users');
var deleteuser = require('./routes/Admin/User/DeleteUser');
var EmployeeRouter = require('./routes/Admin/User/Employee');
var Employee_EditRouter = require('./routes/Admin/User/EditEmployee');
var Employee_updateUserRouter = require('./routes/Admin/User/AdminUpdateEmployee');
var addUser = require('./routes/Admin/User/AddUsers');


/**
 * Vehicle router path
 * **/
var Vehicle = require('./routes/Admin/Vehicle/Vehicle');
var VLDelete = require('./routes/Admin/Vehicle/DeleteVL');
var VLedit = require('./routes/Admin/Vehicle/EditVL');
var updateVL = require('./routes/Admin/Vehicle/updateVL');

//Spare parts
var Sparts = require('./routes/Admin/Spare Parts/Sparts');
var DeleteSP = require('./routes/Admin/Spare Parts/DeleteSP');
var SPedit = require('./routes/Admin/Spare Parts/EditSP');
var updateSP = require('./routes/Admin/Spare Parts/UpdateSP');



//TEST
var ADDSP=require('./routes/Admin/SPADD');
var VADD=require('./routes/Admin/VADD');

var vv=require('./routes/Admin/veadd');
var ss=require('./routes/Admin/spaadd');


//Promotion
var promotion=require('./routes/Admin/promotion/promotionpage-navigation')
var promotion1=require('./routes/Admin/promotion/promotion1')
var promotion2=require('./routes/Admin/promotion/promotion2')
var promotion3=require('./routes/Admin/promotion/promotion3')



var Delete_promotion1=require('./routes/Admin/promotion/Delete_promotion1')
var Delete_promotion2=require('./routes/Admin/promotion/Delete_promotion2')
var Delete_promotion3=require('./routes/Admin/promotion/Delete_promotion3')



//Contactus
var Contactus=require('./routes/Admin/ContactUs/Contactus')
var ContactSubmit=require('./routes/Admin/ContactUs/ContactSubmit')
var deleteContactus=require('./routes/Admin/ContactUs/deleteContactus')

var AdminShow=require('./routes/Admin/ContactUs/AdminShow')





//Madush Account



var expenesesRouter = require('./routes/Financial/expeneses');
var adminRouter = require('./routes/Financial/adminhome');
var incomestatRouter = require('./routes/Financial/incomestat');
var incomeRouter = require('./routes/Financial/income');
var addincomeRouter = require('./routes/Financial/addincome');
var netprofitRouter = require('./routes/Financial/netprofit');
var NetprofitReportRouter = require('./routes/Financial/NetprofitReport');


//Vihanga
var addSpareparts=require('./routes/Sashika_Spare_Parts/AddSpareParts');
var deletePart=require('./routes/Sashika_Spare_Parts/Spare_parts_delete');
var redirect=require('./routes/Pages/Sashika_spare_redirect');
var editPartspr=require('./routes/Sashika_Spare_Parts/Shashika_edit_nav._spe');
var updateSpare=require('./routes/Sashika_Spare_Parts/Sashika_update_sp');
var Sashik_spare_des=require('./routes/Sashika_Spare_Parts/Spare_parts-Des');


//Agasthi

var employeeTable = require('./routes/Employee_Manager/table');
var updateprofile = require('./routes/Employee_Manager/update');


var salary = require('./routes/Employee_Manager/salary');
var salarytable = require('./routes/Employee_Manager/salarytable');
//var login_employee = require('./routes/login')
//var login1=require('./routes/Employee_Manager/login1')

var update = require('./routes/Employee_Manager/update');
var emp_login = require('./routes/Employee_Manager/Register_Employees')





//Sathma

var Login = require('./routes/Login/Employee_Login_navigation')
var UserLogin = require('./routes/Login/UserLogin')
var UserAuth = require('./routes/UserLogin/UserAuth')
var Regnewseller = require('./routes/UserLogin/Regnewseller')
var userprofile = require('./routes/UserLogin/userprofile')
var editUserProfile = require('./routes/UserLogin/reguserupdate')
var updateseller = require('./routes/UserLogin/updateseller')

var DeleteUserProfile = require('./routes/UserLogin/userDelete')
var ExtSellers = require('./routes/UserLogin/ExtSellers')



//Ushini


var addselvehicle = require('./routes/Seller_vehicle_manager/addselvehicle');
var front1Router = require('./routes/Seller_vehicle_manager/sel_view');
var Spare_des=require('./routes/Seller_vehicle_manager/sel_vehicleProfile');

var sel_vehi_table = require('./routes/Seller_vehicle_manager/sel_vehicle_table');
var updateSelVehicle = require('./routes/Seller_vehicle_manager/updateSelVehicle');
var updateSelVehicleNavigation = require('./routes/Seller_vehicle_manager/updateSelVehicleNavigation');
var deleteSelVehicle = require('./routes/Seller_vehicle_manager/deleteSelVehicle');


//Nipuni


var tableEditNavigation = require('./routes/External_Vehicle/Edit_vehicle');
var edit_spare = require('./routes/External_Vehicle/update_vehicle');
var addsparepartsvehicle = require('./routes/External_Vehicle/ExternalSeller_Vehi');
var ExternaldeleteSparepart = require('./routes/External_Vehicle/delete_vehicle');
var redirectExternalpage = require('./routes/External_Vehicle/redirectExternalpage');





const { extname } = require('path');
var app = express();

// view engine setup

var session = require('express-session'); 
var flash = require('connect-flash');


app.engine('hbs', hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(fileUpload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));
app.use(flash());


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use('/', Home);
app.use('/Admin', indexRouter);


app.use('/SpareHome', SpareHome);


app.use('/Auth', Auth);
app.use('/Register', Register);
app.use('/Regnew', Regnew);
app.use('/Login', Login);
/**
 * User
 */
app.use('/Employee', EmployeeRouter);
app.use('/updateUser', Employee_updateUserRouter);
app.use('/edit', Employee_EditRouter);
app.use('/addUser', addUser);
app.use('/deleteuser', deleteuser);


app.use('/Chart', Chart);
app.use('/users', usersRouter);


/**
 * Vehicle
 */
app.use('/VLedit', VLedit);
app.use('/VLDelete', VLDelete);
app.use('/Vehicle', Vehicle);
app.use('/updateVL', updateVL);



/**
 * Spare parts
 */

app.use('/Sparts', Sparts);
app.use('/SPDelete', DeleteSP);
app.use('/SPedit', SPedit);
app.use('/updateSP', updateSP);


//TEST

app.use('/ADDSP',ADDSP);
app.use('/VADD',VADD);
app.use('/spadd',ss);
app.use('/veadd',vv);

//Report

app.use('/Report',Report);
app.use('/ShashikaVReport',ShashikaVReport);
app.use('/ShashikaSReport',ShashikaSReport);
app.use('/SellersVReport',SellersVReport);

app.use('/SellersSReport',SellersSReport);
app.use('/sellerReport',sellerReport);
app.use('/EmpReport',EmpReport);



//Promotion

app.use('/Promotion',promotion);
app.use('/promotion1',promotion1)
app.use('/promotion2',promotion2)
app.use('/promotion3',promotion3)


app.use('/Delete_promotion1',Delete_promotion1)
app.use('/Delete_promotion2',Delete_promotion2)
app.use('/Delete_promotion3',Delete_promotion3)


//contacUS
app.use('/Contactus',Contactus)
app.use('/ContactSubmit',ContactSubmit)
app.use('/deleteContactus',deleteContactus)
app.use('/AdminShow',AdminShow)




//Madush Account

app.use('/expeneses', expenesesRouter);
app.use('/adminhome', adminRouter);
app.use('/incomestat', incomestatRouter);
app.use('/income', incomeRouter);
app.use('/addincome',addincomeRouter);
app.use('/netprofit',netprofitRouter);
app.use('/NetprofitReport',NetprofitReportRouter);




//Vihanga
app.use('/addSpareparts',addSpareparts);
app.use('/sashikaaa',sashikaaa);
app.use('/deletePart',deletePart);
app.use('/redirect',redirect);
app.use('/editPartspr',editPartspr);
app.use('/updateSpare',updateSpare);

app.use('/get_part',Sashik_spare_des);


//Agasthi
app.use('/users', usersRouter);
app.use('/table', employeeTable);
app.use('/update', updateprofile)


app.use('/salary', salary);
app.use('/salarytable', salarytable);

app.use('/updateemp', update);

app.use('/emp_login', emp_login);




//Helitha



app.use('/get_vehicle', get_vehicle);

app.use('/addvehicle', Sashikaaddvehicle);
app.use('/vehicle_index_redirect', vehicle_index_redirect);



app.use('/editvehi', Sashika_editvehi_Page);
app.use('/updatevehicle', Sashika_updatevehicle);
app.use('/deleteVehicle', Sashika_deleteVehicle);




//Sathma
app.use('/UserLogin', UserLogin);
app.use('/UserAuth', UserAuth);
app.use('/Regnewseller', Regnewseller);

app.use('/profile', userprofile);

app.use('/updateseller', updateseller);

app.use('/updateseller', updateseller);
app.use('/editUserProfile', editUserProfile);
app.use('/updateseller', updateseller);
app.use('/DeleteUserProfile', DeleteUserProfile);
app.use('/ExtSellers', ExtSellers);


//Ushini


app.use('/addselvehicle', addselvehicle);
app.use('/updateSelVehicle', updateSelVehicle);


app.use('/sel_view', front1Router);
app.use('/get_vehicle',Spare_des);
app.use('/sel_vehi_table', sel_vehi_table);
app.use('/updateSelVehicle', updateSelVehicleNavigation);
app.use('/deleteSelVehicle', deleteSelVehicle);





//app.use('/', ExternalSeller_Vehi);


app.use('/addsparepartsvehicle', addsparepartsvehicle);
app.use('/tableEdit', tableEditNavigation);
app.use('/edit_spare', edit_spare);
app.use('/ExternaldeleteSparepart', ExternaldeleteSparepart);


app.use('/redirectExternalpage', redirectExternalpage);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
