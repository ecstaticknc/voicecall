const {
  saveEmp,
  getEmp,
  getServices,
  saveAgnt,
  getAgents,
  getCustomerbyId,
  getGPSData,
  getTaskData,
  getTaskDataId,
  getTaskTypeData,
  saveTask,
  deleteTask,
  addCity,
  deleteCity,
  editCity,
  getCityList,
  getCityAgents,
  getTaskbyAgent,
  deleteGPSData,
  addCategory,

  saveVisit,
  getVisitData,
  deleteAgent,
  markTaskComplete,

  getVisitDataById,
  addVehicalData,
  getVehicalData,
  deleteVehicalData,

  editCatgory,
  getCustmerbyMobile,
  addVechialImages,
} = require("../controller/UserController");

const router = require("express").Router();

router.route("/saveCustomer").post(saveEmp);
router.route("/getCustomerData").get(getEmp);
router.route("/getServices").get(getServices);
router.route("/saveAgent").post(saveAgnt);
router.route("/getAgents").get(getAgents);
router.route("/getcityAgents/:Id").get(getCityAgents);
router.route("/getcustomer/:Id").get(getCustomerbyId);
router.route("/getGPSData").post(getGPSData);
router.route("/gettaskdata/:Id").get(getTaskData);
router.route("/taskdata/:Id").get(getTaskDataId);
router.route("/getAgentTask/:Id").get(getTaskbyAgent);
router.route("/gettasktypes").get(getTaskTypeData);
router.route("/savetask").post(saveTask);
router.route("/deletetask/:Id").delete(deleteTask);
router.route("/saveVisit").post(saveVisit);
router.route("/getVisitData").get(getVisitData);
router.route("/addcity").post(addCity);
router.route("/deletecity/:Id").delete(deleteCity);
router.route("/editcity").post(editCity);
router.route("/getcitylist").get(getCityList);
router.route("/deleteGPSData/:Id").delete(deleteGPSData);
router.route("/addCategory").post(addCategory);
router.route("/updateCategory").put(editCatgory);
router.route("/deleteAgent/:Id").delete(deleteAgent);
router.route("/markTaskComplete").post(markTaskComplete);
router.route("/getCustomerbyMobile/:Id").get(getCustmerbyMobile);
router.route("/getVisitDataById/:Id").get(getVisitDataById);
router.route("/addVehicalData").post(addVehicalData);
router.route("/getVehicalData").get(getVehicalData);
router.route("/deleteVechicalData/:Id").delete(deleteVehicalData);
router.route("/addvechialimage").post(addVechialImages);
module.exports = router;
