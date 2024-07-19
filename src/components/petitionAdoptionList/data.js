import React from "react";
const columns = [
  {name: "NAME", uid: "name"},
  {name: "PET", uid: "pet"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    pet: "Perro",
    specie: "Canino",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
];

export {columns, users};
