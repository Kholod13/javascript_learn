(function () {
    const div_A  = document.getElementById("A");
    const div_B  = document.getElementById("B");
    const div_C  = document.getElementById("C");

    div_A.addEventListener("click", function (e) { //CAPTURING & BUBBLING
        console.log("AAA - clicked");
    }, false)
    div_B.addEventListener("click", function (e) { //CAPTURING & BUBBLING
        console.log("BBB - clicked");
    },false)
    div_C.addEventListener("click", function (e) { //WITHOUT BUBBLING (ONLY CAPTURING)
        e.stopPropagation(); // turn off Bubbling
        console.log("CCC - clicked");
    }, false)
})();