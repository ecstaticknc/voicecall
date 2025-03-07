const path = require("path");

const {
  saveEmp,
  getServices,
  getEmp,
  SaveAgnt,
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
  updateCitydata,
  getcitylist,
  getCityAgents,
  getTaskByAgent,
  deleteGPSData,
  addCategory,
  editCategory,
  saveVisit,
  getVisitData,
  deleteAgent,
  markTaskComplete,
  getCustomerbyMobile,
  getVisitDataById,
  getVehicalData,
  addVehicalData,
  deleteVehical,
  saveVehicalImage,
} = require("../models/UserModels");

exports.saveEmp = async (req, res) => {
  let data = [];
  try {
    data = await saveEmp(req.body);
    res.json({ msg: "Customer Saved Successfully", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getEmp = async (req, res) => {
  let data = [];
  try {
    data = await getEmp();
    res.json({ msg: "Customers", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getServices = async (req, res) => {
  let data = [];
  try {
    data = await getServices();
    res.json({ msg: "Customers", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.saveAgnt = async (req, res) => {
  let data = [];
  try {
    data = await SaveAgnt(req.body);
    res.json({ msg: "Agent Saved", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getAgents = async (req, res) => {
  let data = [];
  try {
    data = await getAgents();
    res.json({ msg: "Agents", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getCustomerbyId = async (req, res) => {
  let data = [];
  try {
    data = await getCustomerbyId(req.params.Id);
    res.json({ msg: "Customer Details", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getGPSData = async (req, res) => {
  let data = [];
  try {
    data = await getGPSData(req.body);
    res.json({ msg: "GPSData", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getTaskData = async (req, res) => {
  let data = [];
  try {
    data = await getTaskData(req.params.Id);
    res.json({ msg: "Task Data", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getTaskDataId = async (req, res) => {
  let data = [];
  try {
    data = await getTaskDataId(req.params.Id);
    res.json({ msg: "Task Data by ID", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getTaskTypeData = async (req, res) => {
  let data = [];
  try {
    data = await getTaskTypeData();
    res.json({ msg: "Task Types", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.saveTask = async (req, res) => {
  let data = [];
  try {
    data = await saveTask(req.body);
    res.json({ msg: "Task Added", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.deleteTask = async (req, res) => {
  let data = [];
  try {
    data = await deleteTask(req.params.Id);
    res.json({ msg: "Task Deleted", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.addCity = async (req, res) => {
  let data = [];
  try {
    data = await addCity(req.body);
    res.json({ msg: "City Added", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.deleteCity = async (req, res) => {
  let data = [];
  try {
    data = await deleteCity(req.params.Id);
    res.json({ msg: "City Deleted", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.editCity = async (req, res) => {
  let data = [];
  try {
    data = await updateCitydata(req.body);
    res.json({ msg: "City Deleted", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getCityList = async (req, res) => {
  let data = [];
  try {
    data = await getcitylist();
    res.json({ msg: "City List", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getCityAgents = async (req, res) => {
  let data = [];
  try {
    data = await getCityAgents(req.params.Id);
    res.json({ msg: "Agent List Citywise", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getTaskbyAgent = async (req, res) => {
  let data = [];
  try {
    data = await getTaskByAgent(req.params.Id);
    res.json({ msg: "TaskList", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.deleteGPSData = async (req, res) => {
  let data = [];
  try {
    data = await deleteGPSData(req.params.Id);
    res.json({ msg: "GPS Data Deleted", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.addCategory = async (req, res) => {
  let data = [];
  try {
    data = await addCategory(req.body);
    res.json({ msg: "Category Added", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.editCatgory = async (req, res) => {
  let data = [];
  try {
    data = await editCategory(req.body);
    res.json({ msg: "Catagory Updated", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.saveVisit = async (req, res) => {
  let data = [];
  try {
    data = await saveVisit(req.body);
    res.json({ msg: "Visit Saved", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getVisitData = async (req, res) => {
  let data = [];
  try {
    data = await getVisitData(req.body);
    res.json({ msg: "Visit data", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.deleteAgent = async (req, res) => {
  let data = [];
  try {
    data = await deleteAgent(req.params.Id);
    res.json({ msg: "Agent Deleted", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.markTaskComplete = async (req, res) => {
  let data = [];
  try {
    data = await markTaskComplete(req.body);
    res.json({ msg: "Task Updated", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getCustmerbyMobile = async (req, res) => {
  let data = [];
  try {
    data = await getCustomerbyMobile(req.params.Id);
    res.json({ msg: "Customer deatails", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getVisitDataById = async (req, res) => {
  let data = [];

  try {
    data = await getVisitDataById(req.params.Id);
    res.json({ msg: "Visti By Id", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.addVehicalData = async (req, res) => {
  let data = [];
  try {
    data = await addVehicalData(req.body);
    res.json({ msg: "Vehical Added ", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.getVehicalData = async (req, res) => {
  let data = [];
  try {
    data = await getVehicalData();
    res.json({ msg: "Vehical Data ", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.deleteVehicalData = async (req, res) => {
  let data = [];
  try {
    data = await deleteVehical(req.params.Id);
    res.json({ msg: "Vehical Data Deleted", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};

exports.addVechialImages = async (req, res) => {
  let data = [];
  try {
    data = await saveVehicalImage(req.body);
    res.json({ msg: "Vehical Image Added", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
};
