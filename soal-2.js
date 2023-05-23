const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const arrow = (buas, jinak) => {
  return [...buas, ...jinak];
};

console.log(arrow(hewanBuas, hewanJinak));
