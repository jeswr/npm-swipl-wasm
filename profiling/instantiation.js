const SWIPL = require('../dist');

async function main() {

  // const buffer = new ArrayBuffer(100);

  // console.log(buffer.slice(10))
  // console.log(buffer)

  for (let i = 0; i <= 200; i++) {
    if (i % 50 === 0) {
      // Allow time for memeory clearing
      await new Promise(res => setTimeout(res, 10))
      console.log(i, process.memoryUsage().heapUsed / 1000000, 'MB')
    }
    const MODULE = await SWIPL({
      print: () => {},
      printErr: () => {},
    });

    const table = MODULE['asm']['Fb']

    for (const key of Object.keys(MODULE)) {
      // console.log(MODULE[key])
      // delete MODULE[key]
    }

    // console.log(Object.keys(MODULE).filter(x => !x.includes('PL')))

    // delete MODULE['HEAP8']

    // console.log(MODULE['HEAP8'])

    // const t2 = new WebAssembly.Table();

    // console.log(table.length)

    // table.set(0)

    // Notes: Removing the heaps makes memory consumption slower, but not by a lot

    for (let i = 0; i < table.length; i += 1) {
      // This also makes memory consumption slower - but not by a lot
      table.set(i)
    }
  }


  //   // const buffer = new ArrayBuffer();
  //   // buffer.
  //   // MODULE.exitRuntime()
  // }
}

main();