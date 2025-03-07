const connection = require("../config/Db");

const { promisify } = require("util");

var bcryt = require("bcryptjs");
var CryptoJS = require("crypto-js");
// const { parse } = require("path");
// const e = require("cors");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const { stringify } = require("querystring");
const promise_connection = promisify(connection.query).bind(connection);

exports.saveEmp = async (data) => {
  const custdob = dayjs(data.birthdate).format("YYYY/MM/DD");
  console.log("data", [data.enquiryAbout]);
  let query =
    "insert into customerdetails(firstName,middleName,lastName,gender,custDob,maritalStatus,custAddress,email,enquiry) values(?,?,?,?,?,?,?,?,?)";

  return await promise_connection(query, [
    data.firstName,
    data.middleName,
    data.lastName,
    data.gender,
    custdob,
    data.maritalStatus,
    data.address,
    data.emailAddress,
    String(data.enquiryAbout),
  ]);
  // return null;
};

exports.getServices = async () => {
  let query = "select * from servicesdata";

  return await promise_connection(query);
};

exports.getEmp = async () => {
  let query =
    "SELECT *,DATE_FORMAT(custDob,'%d/%m/%Y') AS custDob1 FROM customerdetails";
  return await promise_connection(query);
};

exports.SaveAgnt = async (data) => {
  let agntdob = null;
  try {
    agntdob = dayjs(data.agentDob).format("YYYY/MM/DD");
  } catch (error) {
    console.log("error", error);
  }
  // console.log("data", data);
  let query =
    "insert into agentdata (firstName,middleName,lastName,gender,agnentDob,cityId,address,email,mobileNo)values(?,?,?,?,?,?,?,?,?)";
  return await promise_connection(query, [
    data.firstName,
    data.middleName,
    data.lastName,
    data.gender,
    agntdob,
    data.cityId,
    data.agentAddress,
    data.agentEmail,
    data.mobileNumber,
  ]);
  // return null;
};

exports.getAgents = async (data) => {
  let query =
    "SELECT *,DATE_FORMAT(agnentDob,'%d/%m/%Y') AS agentDob,citydata.CityName FROM agentdata inner join citydata on citydata.cityId=agentdata.cityID";
  return await promise_connection(query);
};

exports.getCustomerbyId = async (Id) => {
  let query =
    "SELECT *,DATE_FORMAT(custDob,'%d/%m/%Y') AS custDob1 FROM customerdetails where  custId=?";
  return await promise_connection(query, [Id]);
};

exports.getGPSData = async (data) => {
  let query = "select * from gpsdata where menuLevel=? ";
  return await promise_connection(query, [data.level]);
};

exports.getTaskData = async (Id) => {
  let query =
    "SELECT  td.taskId,td.taskName,td.taskTo,td.taskType,td.taskType,DATE_FORMAT(td.taskCreateionDate,'%d/%m/%Y') as taskCreateionDate, DATE_FORMAT(td.taskComplitionDate,'%d/%m/%Y') as taskComplitionDate,DATE_FORMAT(td.taskSheduleDate,'%d/%m/%Y') as taskSheduleDate,td.taskDetails,td.taskNotes,tt.taskTypeName,cd.CityName,CONCAT(ad.firstName,' ',ad.middleName,' ',ad.lastName) as agnentName FROM ((taskdata as td INNER JOIN tasktype as tt on tt.taskTypeId=td.taskType)INNER join citydata as cd on cd.cityId=td.cityId )INNER JOIN agentdata as ad on ad.agentId=td.taskTo  where td.cityId=?";
  return await promise_connection(query, [Id]);
};

exports.getTaskDataId = async (Id) => {
  let query =
    "SELECT td.taskId,td.taskName,td.taskTo,td.taskType,td.taskType,DATE_FORMAT(td.taskCreateionDate,'%d/%m/%Y') as taskCreateionDate, DATE_FORMAT(td.taskComplitionDate,'%d/%m/%Y') as taskComplitionDate,DATE_FORMAT(td.taskSheduleDate,'%d/%m/%Y') as taskSheduleDate,td.taskDetails,td.taskNotes,tt.taskTypeName,cd.CityName FROM (taskdata as td INNER JOIN tasktype as tt on tt.taskTypeId=td.taskType)INNER join citydata as cd on cd.cityId=td.cityId where td.taskId=? ";
  return await promise_connection(query, [Id]);
};

exports.getTaskTypeData = async () => {
  let query = "SELECT * FROM tasktype";
  return await promise_connection(query);
};

exports.saveTask = async (data) => {
  console.log("data", data);
  taskdate = dayjs().format("YYYY/MM/DD");
  const tasksheduledate = dayjs(data.followUpDate).format("YYYY/MM/DD");
  let query =
    "insert into taskdata (taskName,taskTo,taskType,taskCreateionDate,taskDetails,cityId,tasksheduledate)values(?,?,?,?,?,?,?)";
  return await promise_connection(query, [
    data.taskname,
    data.taskto,
    data.tasktype,
    taskdate,
    data.taskdetails,
    data.cityId,
    tasksheduledate,
  ]);
  // return null;
  // taskdate = dayjs().format("YYYY/MM/DD");
  // const tasksheduledate = dayjs(data.followUpDate).format("YYYY/MM/DD");
  // const taskname = data.custFirstName + " " + data.custLastName;
  // let query1 =
  //   "insert into taskdata (taskName,taskTo,taskType,taskCreateionDate,taskDetails,cityId,taskSheduleDate)values(?,?,?,?,?,?,?)";
  // queryresult = await promise_connection(query1, [
  //   taskname,
  //   data.agentId,
  //   1,
  //   taskdate,
  //   data.followUpReason,
  //   data.custCity,
  //   tasksheduledate,
  // ]);
};

exports.deleteTask = async (Id) => {
  let query = "delete from taskdata where taskId=?";
  return await promise_connection(query, [Id]);
};

exports.addCity = async (data) => {
  let query = "insert into citydata (CityName)values(?)";
  return await promise_connection(query, [data.CityName]);
};

exports.deleteCity = async (Id) => {
  //console.log("data", Id);
  let query = "delete from citydata where cityId=?";
  return await promise_connection(query, [Id]);
};

exports.updateCitydata = async (data) => {
  //console.log("data", data);
  let query = "Update citydata set CityName=? , CityCode=? where cityId=?";
  return await promise_connection(query, [
    data.CityName,
    data.CityCode,
    data.cityId,
  ]);
};

exports.getcitylist = async (data) => {
  let query = "SELECT * FROM citydata";
  return await promise_connection(query);
};

exports.getCityAgents = async (Id) => {
  // console.log("Id", Id);
  let query = "select * from agentdata where cityId=?";
  return await promise_connection(query, [Id]);
};

exports.getTaskByAgent = async (Id) => {
  let query =
    "SELECT td.taskId,td.taskName,td.taskTo,td.taskType,td.taskType,DATE_FORMAT(td.taskCreateionDate,'%d/%m/%Y') as taskCreateionDate, DATE_FORMAT(td.taskComplitionDate,'%d/%m/%Y') as taskComplitionDate,DATE_FORMAT(td.taskSheduleDate,'%d/%m/%Y') as taskSheduleDate,td.taskDetails,td.taskNotes,tt.taskTypeName,cd.CityName FROM (taskdata as td INNER JOIN tasktype as tt on tt.taskTypeId=td.taskType)INNER join citydata as cd on cd.cityId=td.cityId where td.taskTo=? ";
  return await promise_connection(query, [Id]);
};

exports.deleteGPSData = async (Id) => {
  let query = "delete from gpsdata where menuId=?";
  return await promise_connection(query, [Id]);
  //  console.log("Id", Id);
};

exports.addCategory = async (data) => {
  let query =
    "insert  into gpsdata (menuName,menuLevel,productName,productDescription,productPrice,installationCost) values (?,?,?,?,?,?)";
  return await promise_connection(query, [
    data.menuName,
    data.menuId,
    data.productName,
    data.productDesc,
    data.productPrice,
    data.productCost,
  ]);
  // console.log("data in model", data);
  // return null;
};

exports.editCategory = async (data) => {
  console.log("data", data);
  if (data.productName) {
    console.log("data product", data.productName);
    let query =
      "update gpsdata set menuName=?,productName=?,productDescription=?,productPrice=?,installationCost=?  where menuId=?";
    return await promise_connection(query, [
      data.productName,
      data.productName,
      data.productDesc,
      data.productPrice,
      data.productCost,
      data.menuId,
    ]);
  } else {
    console.log("data catagory", data.menuName);
    let query = "update gpsdata set menuName=? where menuId=?";
    return await promise_connection(query, [data.menuName, data.menuId]);
  }
  // // let query = "update gpsdata set menuName=? where menuId=?";
  // // return await promise_connection(query, [data.menuName, data.menuId]);
  // return null;
};

exports.saveVisit = async (data) => {
  //  console.log("data", data);
  const enquireabout = data.enquiryAbout.join(",");

  console.log("data", data, "converted", enquireabout);
  let query =
    "insert into visitdata (WhatsAppNumber,companyName,custAddress,custCity,custFirstName,custLastName,custState,enquiryAbout,fleetSize,followUpReason,followUpRemark,followUpRequired,noSalesReason,operatorInterest,phoneNumber,purposeVisit,salesOption,vehicleClass,visitorType,agentId,noEscalationReason,escalationOption) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  let queryresult = await promise_connection(query, [
    data.WhatsAppNumber,
    data.companyName,
    data.custAddress,
    data.custCity,
    data.custFirstName,
    data.custLastName,
    data.custState,
    enquireabout,
    data.fleetSize,
    data.followUpReason,
    data.followUpRemark,
    data.followUpRequired,
    data.noSalesReason,
    data.operatorInterest,
    data.phoneNumber,
    data.purposeVisit,
    data.salesOption,
    data.vehicleClass,
    data.visitorType,
    data.agentId,
    data.noEscalationReason,
    data.escalationOption,
  ]);
  if (data.followUpRequired !== "no") {
    taskdate = dayjs().format("YYYY/MM/DD");
    const tasksheduledate = dayjs(data.followUpDate).format("YYYY/MM/DD");
    const taskname = data.custFirstName + " " + data.custLastName;
    let query1 =
      "insert into taskdata (taskName,taskTo,taskType,taskCreateionDate,taskDetails,cityId,taskSheduleDate)values(?,?,?,?,?,?,?)";
    queryresult = await promise_connection(query1, [
      taskname,
      data.agentId,
      1,
      taskdate,
      data.followUpReason,
      data.custCity,
      tasksheduledate,
    ]);
  }
  return queryresult;
};

exports.getVisitData = async () => {
  let query =
    "SELECT t2.visitId,t2.WhatsAppNumber,t2.companyName,t2.custAddress,t2.custCity,t2.custFirstName,t2.custLastName,t2.custState,GROUP_CONCAT(t1.serviceName ORDER BY FIND_IN_SET(t1.serviceId, t2.enquiryAbout)) AS enquiryAbout,t2.fleetSize,t2.followUpReason,t2.followUpRemark,t2.followUpRequired,t2.noSalesReason,t2.operatorInterest,t2.phoneNumber, t2.purposeVisit, t2.salesOption, t2.vehicleClass, t2.visitorType, t2.noEscalationReason ,t2.agentId FROM  visitdata t2 LEFT JOIN servicesdata t1 ON FIND_IN_SET(t1.serviceId, t2.enquiryAbout) GROUP BY  t2.visitId";
  return await promise_connection(query);
};

exports.deleteAgent = async (Id) => {
  let query = "delete from agentdata where agentId=?";
  return await promise_connection(query, [Id]);
};

exports.markTaskComplete = async (data) => {
  if (data.upsellingDone === "no") {
    console.log("data", data);
    // completiondate = dayjs().format("YYYY/MM/DD");
    // let query ="update taskdata set taskComplitionDate=? where taskId=?"
    // return await promise_connection(query,[completiondate])
  } else {
    // completiondate = dayjs().format("YYYY/MM/DD");
    // let query ="update taskdata set taskComplitionDate=? where taskId=?"
    // return await promise_connection(query,[completiondate])
  }
  return null;
};

exports.getCustomerbyMobile = async (Id) => {
  let query =
    "SELECT *  FROM visitdata where phoneNumber=? or WhatsAppNumber=? ";
  return await promise_connection(query, [Id, Id]);
};

exports.getVisitDataById = async (Id) => {
  let query =
    "SELECT t2.visitId,t2.WhatsAppNumber,t2.companyName,t2.custAddress,t2.custCity,t2.custFirstName,t2.custLastName,t2.custState,GROUP_CONCAT(t1.serviceName ORDER BY FIND_IN_SET(t1.serviceId, t2.enquiryAbout)) AS enquiryAbout,t2.fleetSize,t2.followUpReason,t2.followUpRemark,t2.followUpRequired,t2.noSalesReason,t2.operatorInterest,t2.phoneNumber, t2.purposeVisit, t2.salesOption, t2.vehicleClass, t2.visitorType, t2.noEscalationReason ,t2.agentId FROM  visitdata t2 LEFT JOIN servicesdata t1 ON FIND_IN_SET(t1.serviceId, t2.enquiryAbout) where t2.visitId=? GROUP BY  t2.visitId";
  return await promise_connection(query, [Id]);
};

exports.addVehicalData = async (data) => {
  let query =
    "insert into vehicaldata (chasisNumber,vehicleNumber,vehicleOption)values(?,?,?)";

  return await promise_connection(query, [
    data.chasisNumber,
    data.vehicleNumber,
    data.vehicleOption,
  ]);
};

exports.getVehicalData = async (data) => {
  let query = "select * from vehicaldata";
  return await promise_connection(query);
};

exports.deleteVehical = async (Id) => {
  console.log("Id", Id);
  let query = "delete from vehicaldata where vehicleId=?";
  return await promise_connection(query, [Id]);
};

exports.saveVehicalImage = async (data) => {
  console.log("data", data);
  let query = "insert into VechialImages ()values(?,?,?)";
  return await promise_connection(query, []);
};
