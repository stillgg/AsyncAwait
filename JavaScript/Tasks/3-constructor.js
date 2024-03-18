"use strict";

// Task: rewrite class Basket to class Total with async constructor
// Constructor call example:
//   const total = await new Total(electronics);
//   console.log({ total });

class Total {
  #items = null;

  constructor(items) {
    return new Promise((res) =>
      setTimeout(() => {
        this.#items = items;
        res(this);
      }, 1000)
    );
  }

  total(callback) {
    let result = 0;
    for (const item of this.#items) {
      if (item.price < 0) {
        callback(new Error("Negative price is not allowed"));
        return;
      }
      result += item.price;
    }
    callback(null, result);
  }
}

const electronics = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

(async () => {
  const res = await new Total(electronics);

  res.total((error, money) => {
    if (error) console.error({ error });
    else console.log({ money });
  });
})();
