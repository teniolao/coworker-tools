let member1 = {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Software Engineer",
  department: "Engineering",
  manager: null,
  location: "Glasgow",
  firstAider: "No",
  userSlack: "johndoe",
  timezone: "America/Los_Angeles",
};

let member2 = {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Software Engineer",
  department: "Engineering",
  manager: null,
  location: "Glasgow",
  firstAider: "No",
  userSlack: "johndoe",
  timezone: "America/Los_Angeles",
};

let member3 = {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Software Engineer",
  department: "Engineering",
  manager: null,
  location: "Glasgow",
  firstAider: "No",
  userSlack: "johndoe",
  timezone: "America/Los_Angeles",
};
//cli command
const members = [member1, member2, member3];
module.exports = members;
console.table(members);
