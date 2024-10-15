// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
// getJohnProfile().then((promise) => {
//   console.log(promise)
// }).catch ((e) => {
//   console.log(e)
// })

async function newFunction () {
  try {
    const data = await getJohnProfile()
    console.log(data)
  }catch (e) {
    console.log(e)
  }
}
newFunction()