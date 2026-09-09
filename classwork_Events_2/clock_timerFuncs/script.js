(function () {
    let clock = document.getElementById("clock");
    const btnStop = document.getElementById("btnStop");
    function fixNumber(number) {
        if(number < 10) {
            number = `0${number}`;
        }
        return number;
    }

    function updateTime(){
        const time = new Date();
        clock.innerText = `${fixNumber(time.getHours())} : ${fixNumber(time.getMinutes())} : ${fixNumber(time.getSeconds())}`;
    }

    updateTime();
    let intevalId = setInterval(updateTime, 1000);

    let switcher;
    btnStop.addEventListener("click", function() {
        if(switcher){
            intevalId = setInterval(updateTime, 1000);
            switcher = false;
        }
        else{
            clearInterval(intevalId);
            switcher = true;
        }
    });
    btnStop.addEventListener("dblclick", function() {
        if(switcher){
            intevalId = setInterval(updateTime, 1000);
            switcher = false;
        }
        else{
            clearInterval(intevalId);
            clock.innerText = "00 : 00 : 00";
            switcher = true;
        }
    });
})();