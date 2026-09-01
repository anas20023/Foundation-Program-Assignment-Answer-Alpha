const getCngFare=(distance, isNight=false, waitingMinutes=0)=>{
    const minfare=50,mindistance=2;
    let fare=minfare;
    if(waitingMinutes){
        fare+=waitingMinutes*2
    }
    if(distance<=mindistance){
        if(isNight){
            fare+=fare*0.2
        }
        return fare
    }
    else{
        let newfare=fare+(15*(distance-mindistance))
        if(isNight){
            newfare+=newfare*0.2
        }
        return newfare
    }
}
console.log(getCngFare(2))
console.log(getCngFare(1))
console.log(getCngFare(5))
console.log(getCngFare(10))
console.log(getCngFare(5, false, 10))
console.log(getCngFare(5, true))
console.log(getCngFare(5, true, 10))