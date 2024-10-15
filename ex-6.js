// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
// getJohnProfile().then((data) => {
//   console.log(data)
// }).then(getJohnOrders().then((order) => {
//   console.log(order)
// }))

async function newFunction() {
  try {
    const data1 = await getJohnProfile()
    const data2 = await getJohnOrders()
    console.log(data1)
    console.log(data2)
  }catch (e){
    console.log(e)
  }
}

newFunction()