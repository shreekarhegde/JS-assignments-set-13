
function reArrange(string){
    let sum = 0;
        let splitted = string.split('').sort();
        for(let i = 0; i < string.length; i++){
        let num = parseInt(splitted[i]);
        console.log(num);
            if(!isNaN(num)){
            sum = sum + num;
            console.log(sum);
            }else{
            splitted.push(splitted[i]);
            }
        }
        console.log(splitted);
        let newArray = splitted.slice(string.length);
        console.log(newArray);
        sum = sum.toString();
        newArray.push(sum);
        return newArray.join('');
    }

    console.log(reArrange('AERED100G3RA00DF2'))