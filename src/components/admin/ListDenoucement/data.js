import React from "react";
const columns = [
    { name: "Usuario", uid: "usuario" },
    { name: "Tipo de Abuso", uid: "tAbuso" },
    { name: "Fecha", uid: "fecha" },
    { name: "Opciones", uid: "opciones" },    
];

const users = [
    {
        id: 1,
        usuario: "Tony Reichert",
        tAbuso: "Maltrato Animal",
        descripcionAbuso: "Al animalito lo tienen en una jaula muy pequeña y no le dan de comer",
        fecha: "2024-01-01",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        usuario: "Zoey Lang",
        tAbuso: "Falta de alimentación",
        descripcionAbuso: "No se le da de comer a los animalitos",
        fecha: "2024-01-01",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
    },
    {
        id: 3,
        usuario: "Jane Fisher",
        tAbuso: "Abandono",
        descripcionAbuso: "Dejan a los animalitos en la calle",
        fecha: "2024-01-01",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
    },
    {
        id: 4,
        usuario: "William Howard",
        tAbuso: "Maltrato Animal",
        descripcionAbuso: "Golpean a los animalitos",
        fecha: "2024-01-01",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
    },
    {
        id: 5,
        usuario: "Kristen Copper",
        tAbuso: "Falta de alimentación",
        descripcionAbuso: "No se les da de comer a los animalitos",
        fecha: "2024-01-01",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
    {
        id: 6,
        usuario: "Kristen Copper",
        tAbuso: "Falta de alimentación",
        descripcionAbuso: "No se les da de comer a los animalitos",
        fecha: "2024-01-01",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
    {
        id: 7,
        usuario: "Kristen Copper",
        tAbuso: "Falta de alimentación",
        descripcionAbuso: "No se les da de comer a los animalitos",
        fecha: "2024-01-01",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
];

export { columns, users };
