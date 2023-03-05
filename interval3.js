console.log(1);
console.log(2);
let num = 0;
const interValId = setInterval( () => {
    // console.log(num++)//1 sec por por cholbe 5 dekhabe na
    console.log(++num)//1 sec por por cholbe 5 dekhabe
    if(num === 5){
        clearInterval(interValId);
    }
}, 1000)
console.log(4);
console.log(5);
//  ctrl c  to stop runnign anything
// clearInterval  die akta somoy running stop hoye jabe
// clearTimeout timeout er vitorer ta k bad die dibe
//  i++ 1 agube ar 1 kore barabe
// ++i 1 kore barie barie agube


// setTime akta somoy por sudu akbar dekhabe but set interval akta somoy por por bar bar dekhabe



let sec=0;
let minute = 0;
let hour = 0;
let day =0

const interval = setInterval( ()=> {
    sec++;
    console.log(sec);
    if(sec === 5){
        minute++
        console.log(minute);
        if(minute === 5){
            hour++;
            console.log(hour);
            if(hour === 5){
                day++
                console.log(day);
                if(day === 5){
                    clearInterval(interval);
                }
            }
        }
    }

},1000)