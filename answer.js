//Question No. 1
const describeValue=(a)=>{
    return `${typeof a} | ${(a?'truthy':'falsy')}`
}
console.log(describeValue("hello"))
console.log(describeValue(""))
console.log(describeValue(25))
console.log(describeValue(0))
console.log(describeValue(true))
console.log(describeValue(null))
console.log(describeValue(undefined))
console.log(describeValue("0"))
console.log(describeValue(NaN))

//Question No. 2
const getDayType=(day)=>{
    let message="Invalid Day";
    switch(day.toLowerCase()){
        case "friday":
            message= "Weekend"
            break
        case "saturday":
            message= "Weekend"
            break
        case "sunday":
            message="Working Day"
            break
        case "monday":
            message="Working Day"
            break
        case "tuesday":
            message="Working Day"
            break
        case "wednesday":
            message="Working Day"
            break
        case "thursday":
            message="Working Day"
            break
        default:
            message="Invalid Day"
    }
    return message
}
console.log(getDayType("Friday"))
console.log(getDayType("friday"))
console.log(getDayType("MONDAY"))
console.log(getDayType("Bandarban"))
//Question No. 3
const validateUsername=(username)=>{
    if(username.length<4){
        return "Too Short"
    }
    const modified_username=username.toLowerCase()
    if(modified_username.includes(" ")){
      return "No Space Allowed"
    }
    if(modified_username.includes("admin")){
        return "Reserved Word"
    }
    return "Available"
}
console.log(validateUsername("rahim123"))
console.log(validateUsername("ab"))
console.log(validateUsername("a b"))
console.log(validateUsername("abcd"))
console.log(validateUsername("rahim islam"))
console.log(validateUsername("superadmin99"))
console.log(validateUsername("Admin_Rahim"))
//Question No. 4
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
//Question No. 5
const getChaseVerdict=(target, scored, ballsLeft)=>{
    const runsNeeded = target - scored
    if(runsNeeded<=0){
        return "Won"
    }
    if(runsNeeded>0 && ballsLeft<=0){
        return "Lost"
    }
    const requiredRate = (runsNeeded / ballsLeft) * 6
    let verdict=''
    if(requiredRate<=6){
        verdict="Comfortable"
    }
    else if(requiredRate>6 && requiredRate<=12){
        verdict="Tough"
    }
    else{
        verdict="Almost Impossible"
    }
    return `Need ${runsNeeded} ${(runsNeeded>1)?"runs":"run"} in ${ballsLeft} ${(ballsLeft>1)?"balls":"ball"} | ${verdict}`
}
console.log(getChaseVerdict(200, 200, 12))
console.log(getChaseVerdict(200, 190, 0))
console.log(getChaseVerdict(100, 90, 12))
console.log(getChaseVerdict(100, 80, 12))
console.log(getChaseVerdict(100, 70, 12))
console.log(getChaseVerdict(150, 149, 1))