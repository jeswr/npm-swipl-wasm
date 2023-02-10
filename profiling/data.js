// const fs = require('fs');
// const path = require('path')
// const wasmBuffer = fs.readFileSync(
//   path.join(
//     __dirname,
//     '..',
//     'dist',
//     'swipl',
//     'swipl-web.wasm'
//   )
// );

const buffer = new Buffer("AGFzbQEAAAABBwFgAn9/AX8DAgEABwoBBmFkZFR3bwAACgkBBwAgACABagsACgRuYW1lAgMBAAA=", "base64")


async function main() {
  for (let i = 0; i < 10_000_000; i++) {
    if (i % 100 === 0) {
      await new Promise(res => setTimeout(res, 10))
      console.log(i, process.memoryUsage().heapUsed / 1000000, 'MB')
    }
    let memory = new WebAssembly.Memory({ initial: 1600, shared: false });

    // const instance = await WebAssembly.instantiate(buffer);
    // console.log(Object.keys(instance.module))
    // return;
  }


  // const { addTwo } = instance.instance.exports;
  // for (let i = 0; i < 10; i++) {
  // }
}

main();
