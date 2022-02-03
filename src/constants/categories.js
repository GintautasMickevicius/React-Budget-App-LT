const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Verslas', amount: 0, color: incomeColors[0] },
  { type: 'Investicijos', amount: 0, color: incomeColors[1] },
  { type: 'Papildomos pajamos', amount: 0, color: incomeColors[2] },
  { type: 'Loterija', amount: 0, color: incomeColors[4] },
  { type: 'Dovanos', amount: 0, color: incomeColors[5] },
  { type: 'Atlyginimas', amount: 0, color: incomeColors[6] },
  { type: 'Santaupos', amount: 0, color: incomeColors[7] },
  { type: 'Nuoma', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Sąskaitos', amount: 0, color: expenseColors[0] },
  { type: 'Automobilio remontas', amount: 0, color: expenseColors[1] },
  { type: 'Rūbai', amount: 0, color: expenseColors[2] },
  { type: 'Kelionės', amount: 0, color: expenseColors[3] },
  { type: 'Maistas', amount: 0, color: expenseColors[4] },
  { type: 'Apsipirkimas', amount: 0, color: expenseColors[5] },
  { type: 'Namai', amount: 0, color: expenseColors[6] },
  { type: 'Pramogos', amount: 0, color: expenseColors[7] },
  { type: 'Telefonas', amount: 0, color: expenseColors[8] },
  { type: 'Gyvunai', amount: 0, color: expenseColors[9] },
  { type: 'Kita', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
