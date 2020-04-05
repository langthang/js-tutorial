const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getFruit = async (name) => {
  const fruits = {
    pineapple: 'sad',
    peach: 'asds',
    strawberry: 'asdsad'
  };

  await sleep(2000);

  return fruits[name];
};

const fruits = ['peach', 'pineapple', 'strawberry'];

const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

const smoothie = fruits.map(v => getFruit(v));

const fruitLoop2 = async () => {
  // for await (const emoji of smoothie) {
  //   log(emoji);
  // }

  fruits.map(async f => {
    const emoji = await getFruit(f)
    log(emoji);
  })
};

const fruitLoop3 = async () => {
  
  fruits.forEach(async f => {
    const emoji = await getFruit(f);
    log(emoji);
  })
};

const fruitInspection = async () => {
  if ((await getFruit('peach')) === '🍑') {
    console.log('looks peachy!');
  }
};

fruitLoop2();
