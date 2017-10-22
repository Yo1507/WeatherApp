var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Error: Arguments must be numbers.');
            }
        }, 1500);
    });
};

asyncAdd(1, 2).then((result) => {
    console.log('Result: ', result);
    return asyncAdd(result, 'A');
}).then((result) => {
    console.log('Should be 36 =>', result);
}).catch((errMessage) => {
    console.log(errMessage);
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         // reject('Unable to fulfill promise.')
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errMessage) => {
//     console.log('Error: ', errMessage);
// });