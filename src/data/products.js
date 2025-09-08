import pack3 from "../assets/imagenes/pack3.jpeg"; // ← local
// Podés agregar más, por ejemplo:
import salsa1 from "../assets/imagenes/salsa1.jpg";
import burger1 from "../assets/imagenes/burger1.jpg";

export const products = [
  {
    id: "pack3",
    name: "Arepas envasadas al vacío (Pack x3)",
    desc: "Harina de maíz precocido, sin TACC. Listas para dorar o tostar.",
    price: "Consultar",
    img: pack3,
    variants: ["Packx3", "Packx6", "Packx12"],
  },
    {
    id: "salsas",
    name: "Salsas para Pizza",
    desc: "Deliciosa salsa preparada con estrictos controles de calidad para celiacos.",
    price: "Consultar",
    img: salsa1,
    variants: ["Pizza", "Bolognesa", "Carbonara"],
  },
    {
    id: "burguer",
    name: "Hamburguesas congeladas",
    desc: "Deliciosa hamburguesa de carne preparada con estrictos controles de calidad para celiacos.",
    price: "Consultar",
    img: burger1,
    variants: ["Packx3", "Packx6", "Packx12"],
  }
];
