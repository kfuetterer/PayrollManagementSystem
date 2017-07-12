import axios from "axios";

const API = {
  signIn: function() {
    return axios.post("/signin");
  },
  signUp: function(user) {
    console.log(user);
    return axios.post("/signup", user);
  },
  signUpGet: function() {
    return axios.get("/signup");
  },
  signOut: function() {
    return axios.post("/signout");
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
  getSchedule: function() {
    return axios.get("/api/schedule");
  },
  getTimeOffSegment: function() {
    return axios.get("/api/timeoffsegment");
  },
  saveTimeOffSegment: function(text) {
    return axios.post("/api/timeoffsegment", { text });
  },
  getWorkSegment: function() {
    return axios.get("api/worksegment");
  },
  saveWorkSegment: function(id) {
    return axios.post("/api/worksegment/${id}");
  },
  updateWorkSegment: function (id) {
    return axios.update("/api/worksegment/${id}");
  }
};

export default API;