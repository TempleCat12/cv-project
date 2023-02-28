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
      date: "",
      major: "",
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
    date: "2018.09-2021.01",
    task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet sed euismod nisi porta lorem mollis aliquam. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi.",
  },
  // create new empty item with specified id
  factory: function () {
    return {
      id: uniquid(),
      company: "",
      date: "",
      position: "",
      task: "",
    };
  },
};

