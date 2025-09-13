const conversor = (divisa) => {
  return divisa.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
};

export default conversor;
