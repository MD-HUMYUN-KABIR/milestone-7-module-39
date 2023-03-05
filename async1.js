console.log(1);
console.log(2);
// setTimeout(dosomething,4000);//4 sec pore 3 dekhabe
setTimeout(() => {
    console.log(3)
},4000);//4 sec pore 3 dekhabe
console.log(4);
console.log(5);

function dosomething(){
    console.log(3);
}