(function() {

    const main = document.getElementsByTagName('main');
    const NODE_API = "http://localhost:3000";

    const btnHello = document.getElementById('btnHello');
    const btnId = document.getElementById('btnId');
    const printServer = document.getElementById('printServer');

    btnHello.addEventListener('click', async (e) => {
        const data = await getHello();
        //printServer.innerText = typeof data === 'string' ? data : data.message;
        if(typeof data === 'string'){
            printServer.innerText = data;
        }
        else{
            printServer.innerText = data.message;
        }
    });

    async function getHello(){
        try{
            const response = await fetch(`${NODE_API}/api/hello`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const data = await response.json();
            return data;
        }
        catch(err){
            return `Server Error: ${err}`;
        }
    }

})();