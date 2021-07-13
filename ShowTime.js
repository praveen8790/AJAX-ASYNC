function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds() + "Secs";
}

function showSessionExpire(){
    console.log("Activity-B: Your Session Expired At" + showTime());
}

console.log("Activity-A:triggering Activity-B At" + showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A:triggering Activity-B At" + showTime()+"will execute after 5 seconds");