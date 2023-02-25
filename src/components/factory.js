import uniquid from "uniquid";
export { education, practice};
const education = {
  title: "Educational experience",
  objs: [],
  placeholder: {
    school: "South China Agricultural University",
    major: "Computer Science",
    degree: "Bachelor",
    date: "2018-2022",
  },
  // create new empty item with specified id
  factory: function () {
    return {
      id: uniquid(),
      school: "",
      major: "",
      date: "",
      degree: "",
    };
  },
};
const practice = {
  title: "Practice experience",
  objs: [],
  placeholder: {
    company: "The Odin Project",
    position: "Front development",
    task: "UI design",
    date: "2018.09-2021.01",
  },
  // create new empty item with specified id
  factory: function () {
    return {
      id: uniquid(),
      company: "",
      position: "",
      task: "",
      date: "",
    };
  },
};
function educationFactory() {
  return {
    id: uniquid(),
    school: "",
    major: "",
    date: "",
    degree: "",
  };
}
function practiceFactory() {
  return {
    id: uniquid(),
    company: "",
    position: "",
    task: "",
    date: "",
  };
}
