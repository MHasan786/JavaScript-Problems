const num = -101;

const posNag = (num)=>{
        if(num < 0 ){
            return ('Number is negative: '+num);
        }else if(num >= 0 ){
            return ('Number is Positive: '+num);
        }
}

console.log(posNag(num));