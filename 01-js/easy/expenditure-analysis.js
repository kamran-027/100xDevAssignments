/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let resultArr = [];

  transactions.map((tx) => {
    const { price, category } = tx;

    const existingCat = resultArr.find((obj) => obj.category === category);

    if (existingCat) {
      existingCat.totalSpent += price;
    } else {
      resultArr.push({ category: category, totalSpent: price });
    }
  });

  return resultArr;
}

calculateTotalSpentByCategory([
  { category: "A", price: 10 },
  { category: "B", price: 20 },
  { category: "A", price: 30 },
  { category: "C", price: 40 },
]);

module.exports = calculateTotalSpentByCategory;
