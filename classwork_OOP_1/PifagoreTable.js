// document (built-in browser object)
// IIFE - Immediately invoked function expression

(function () {
    const main = document.getElementsByTagName("main")[0];
    const SIZE = 9;

    for (let i = 1; i <= SIZE; i++) { // rows
        const row = document.createElement("div"); // <div></div>
        row.setAttribute("class", "row"); // <div class="row">

        for (let j = 1; j <= SIZE; j++) { // columns
            const cell = document.createElement("div"); // <div></div>
            cell.setAttribute("class", "cell");
            cell.innerText = `${i * j}`;

            if (i == j) {
                cell.setAttribute("class", "cell cell-main");
            }

            if (i < j) {
                cell.setAttribute("class", "cell cell-odd");
            }

            if (i > j) {
                cell.setAttribute("class", "cell cell-even");
            }

            row.appendChild(cell);
        }

        main.appendChild(row);
    }
})();