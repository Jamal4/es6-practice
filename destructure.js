const person = {
  name: "Jack william",
  age: 17,
  job: "facebook",
  gfname: "ema watsom",
  address: "jakir hosan rd",
  phone: 4705104850,
};
// const name = person.gfname;
// const phone = person.phone;
// const { phone, gfname } = person;
// console.log(phone, gfname);

const friends = ["amaoir", "kaar", "velladlfjldjl", "kamal"];
const [choto, boro, medium] = friends;

const complexObj = {
  name: "abc",
  info: { address: "kola bagan", leader: "tiger" },
};

const { leader } = complexObj.info;
console.log(leader);
