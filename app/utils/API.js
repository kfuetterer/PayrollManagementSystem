import axios from "axios";

const API = {
  signIn: function(user) {
    console.log(user);
    return axios.post("/api/signin", user);
  },
  signUp: function(user) {
    console.log(user);
    return axios.post("/api/signup", user);
  },
  signOut: function(user) {
    return axios.post("/api/signout", user);
  },
  getCompany: function() {
    return axios.get("/api/company");
  },
  getEmployee: function() {
    return axios.get("/api/employee");
  },
  saveEmployee: function(employee) {
    return axios.get("/api/employee", {employee});
  },
  getPayrollcycle: function() {
    return axios.get("/api/payrollcycle");
  },
  getSchedule: function(userid) {
    return axios.get("/api/schedule", {userid});
  },
  getTimeOffSegment: function(userid) {
    return axios.get("/api/timeoffsegment", {userid});
  },
  saveTimeOffSegment: function(text) {
    return axios.post("/api/timeoffsegment", {text});
  },
  getWorkSegment: function(userid) {
    return axios.get("api/worksegment", {userid});
  },
  saveWorkSegment: function(id) {
    return axios.post("/api/worksegment/${id}");
  },
  updateWorkSegment: function (id) {
    return axios.update("/api/worksegment/${id}");
  }
};

export default API;