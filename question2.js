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