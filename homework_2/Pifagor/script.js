(function (){
    const main = document.getElementById("main");
    const SIZE = 9;

    const title = document.createElement("h1");
    title.innerText = "Pifagor Table";
    title.setAttribute("class", "title");

    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");

    for(let i = 1; i <= SIZE; i++) {
        for (let j = 1; j <= SIZE; j++) {
            const block = document.createElement("div");
            block.innerText = i * j;
            grid.appendChild(block);

            if ((i * j) % 2 === 0) {
                block.classList.add("blue");
            }
            if ((i * j) % 2 !== 0) {
                block.classList.add("purple");
            }
            if (i === j) {
                block.classList.add("yellow");
            }

        }
    }
    //all showing magic in class .grid(css) we just push block  number to block "grid" and then
    //in css make table

    main.appendChild(title);
    main.appendChild(grid);
})();