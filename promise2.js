/* const getData = new Promise((resolve,reject) => {
    // resolve(56665);
    reject('no data found');
})
getData
.then(data => console.log(data + 22))
.catch(err => console.error('err:', err)) */
// ///////////////////
const getData = new Promise((resolve,reject) => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(56665);
    }
    else{
        reject('no data found');
    }
    
})
getData
.then(data => console.log(data + 22))
.catch(err => console.error('err:', err))