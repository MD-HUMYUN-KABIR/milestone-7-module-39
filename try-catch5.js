function checkAge(){
    const ageText = document.getElementById('age').value;
    const error = document.getElementById('error')

    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw 'not valid';//cath e error ta pathie dilam
        }
        else if(age < 18){
            throw 'baccha not allaw';
        }
        else if(age > 30){
            throw 'bura not allow';
        }
        error.innerHTML= ''//error khle akhane asbe n but error na khele akhane aste parbe then aii field k khali kore dibe
        // console.log(bbaria);//jet error dibe mone hoy seta akhane rakhbo
    }
    catch(err){ //error hisebe ja dekhabe seta err argument er maddhome vitore jabe
        //try e error khele akhane dhora khabe
        console.log('error', err)//consonle e error dekhabe
        error.innerHTML = err;//ai id te error show korbe
    }
    finally{
        console.log('jevabe e houk jabo error khai ba na khai');
    }
    console.log(11111);//onnanno somy upore kuno error khele nicher kuno kichu kj kore na ,but try catch use korle error er nicher ta shoe korbe
}