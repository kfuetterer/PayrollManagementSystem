import axios from "axios";

const API = {
  signIn: function(user) {
    return axios.post("/api/signin", user);
  },
  signUp: function(user) {
    return axios.post("/api/signup", user);
  },
  signOut: function() {
    return axios.get("/api/signout");
  },
  getCompany: function(companyid) {
    return axios.get("/api/company/:" + companyid);
  },
  getEmployee: function(id) {
    return axios.get("/api/employee/" + id);
  },
  saveEmployee: function(employee) {
    return axios.get("/api/employee", employee);
  },
  getPayrollcycle: function() {
    return axios.get("/api/payrollcycle");
  },
  getSchedule: function(id) {
    return axios.get("/api/schedule/" + id);
  },
  getTimeOffSegment: function(id) {
    return axios.get("/api/timeoffsegment/" + id);
  },
  saveTimeOffSegment: function(timeoffsegment) {
    return axios.post("/api/timeoffsegment", timeoffsegment);
  },
  getWorkSegment: function(id) {
    return axios.get("/api/worksegment/" + id);
  },
  saveWorkSegment: function(worksegment) {
    return axios.post("/api/worksegment/", worksegment);
  },
  updateWorkSegment: function (id, worksegment) {
    return axios.patch("/api/worksegment/" + id, worksegment);
  }
};

export default API;