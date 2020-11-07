//Summary of data
const AdminDashboard ='SELECT COUNT(*) as total FROM employee';
const spare_part_db_AdminDashboard ='SELECT COUNT(*) as total FROM spare_part_db';
const comvehicles ='SELECT COUNT(*) as total FROM comvehicles';


//Employeee
const userData ='SELECT * from employee';
const addUser ='INSERT INTO employee SET ?';
const DeleteUser ="DELETE FROM employee WHERE Id=?";
const editUser ="SELECT *FROM employee WHERE Id=?";
const updateUser ="UPDATE employee SET empid=?, username=?, email=?,NIC=?, contactno=?,gender=?,position=?,password=? WHERE Id=?";

//Vehicle
const editVehicle ="SELECT *FROM comvehicles WHERE id=?";
const vehicleData="SELECT * FROM `comvehicles`"; 
const vehiclecount ='SELECT COUNT(*) as total FROM comvehicles';
const vehicleupdate ="UPDATE comvehicles SET  model=?,mileage=?,brand=?,engine_capacity=?,color=?,price=?,description=? WHERE id=?";
const vehicleDeletes ="DELETE FROM comvehicles WHERE id=?";


//Spare Parts
const editSP ="SELECT * FROM spare_part_db WHERE item_code=?";
const SpareData="SELECT * FROM `spare_part_db`"; 
const Sparecount ='SELECT COUNT(*) as total FROM spare_part_db';
const updateSP ="UPDATE spare_part_db SET item_name=?,price=?, brand_model=?,description=? WHERE item_code=?";
const Deletespareparts ="DELETE FROM spare_part_db WHERE item_code=?";

//Report Generate
const VehicleReport="SELECT * FROM comvehicles";
const SpareReport="SELECT * FROM spare_part_db";
const employeeReport="SELECT * FROM employee";


const auth ="SELECT * FROM auth WHERE Email=?";
const authInsert ='INSERT INTO auth SET ?';


//Promotion
const promotion1="SELECT * FROM `promotion1`"; 
const promotion1Delete ="DELETE FROM promotion1";

const promotion2="SELECT * FROM `promotion2`"; 
const promotion2Delete ="DELETE FROM promotion2";

const promotion3="SELECT * FROM `promotion3`"; 
const promotion3Delete ="DELETE FROM promotion3";


//ContactUS
const contactus ='INSERT INTO contactus SET ?';
const ContactusShow ='SELECT * from contactus';
const DeleteContactusShow ="DELETE FROM contactus WHERE id=?";

module.exports = {


    auth:auth,
    authInsert:authInsert,
    getAdminDashboard : AdminDashboard,
    getuserData : userData,
    getaddUser : addUser,
    getDeleteUser : DeleteUser,
    geteditUser : editUser,
    getupdateUser : updateUser,
    vehicleData:vehicleData,
    vehiclecount:vehiclecount,
    Deletespareparts:Deletespareparts,
    editSP:editSP,
    updateSP:updateSP,
    SpareData:SpareData,
    Sparecount:Sparecount,
    vehicleupdate:vehicleupdate,
    vehicleDeletes:vehicleDeletes,
    editVehicle:editVehicle,
    promotion1:promotion1,
    promotion1Delete:promotion1Delete,
    promotion2:promotion2,
    promotion2Delete:promotion2Delete,
    promotion3:promotion3,
    promotion3Delete:promotion3Delete,

    comvehicles:comvehicles,
    contactUs:contactus,
    ContactusShow:ContactusShow,
    DeleteContactusShows:DeleteContactusShow,
    VehicleReport:VehicleReport,
    SpareReport:SpareReport,
    employeeReport:employeeReport,


    spare_part_db_AdminDashboard:spare_part_db_AdminDashboard



};
