const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const po = Promise.reject(new Error("reason for rejection..."));
po.then(null, (result) => console.log(result));

const pos = Promise.reject(new Error("reason for rejection..."));
pos.catch((error) => console.log(error));
