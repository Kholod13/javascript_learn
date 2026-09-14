(function() {

    const API_KEY = "-"; //API Ninjas (Emoji API) KEY

    //work with elements DOM
    let canvas = document.getElementById('emoji');
    const main = document.getElementsByTagName('main');

    const btnHappy = document.getElementById('btnHappy');
    btnHappy.addEventListener('click', async (e) => {
        canvas.innerText = await getEmoji(btnHappy.value);
    })
    const btnSad = document.getElementById('btnSad');
    btnSad.addEventListener('click', async(e) => {
        canvas.innerText = await getEmoji(btnSad.value);
    })
    const btnFire = document.getElementById('btnFire');
    btnFire.addEventListener('click', async (e) => {
        canvas.innerText = await getEmoji(btnFire.value);
    })

    //MAIN AJAX FETCH (ASYNC/AWAIT)
    async function getEmoji(emoji) {/* async word */

        try{
            /* await word */
            const response = await fetch(`https://api.api-ninjas.com/v1/emoji?name=${emoji}`, {
                //api settings, in even api is difference
                method: 'GET',
                headers: {
                    'X-Api-Key': API_KEY,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Server Error: ${response.status}`);
                /*
                    1. Как работают три составляющие части:
                    response.status — это HTTP-код ответа сервера (например, 404 — не найдено, 500 — ошибка сервера, 401 — неверный API-ключ).

                    new Error(...) — создает специальный JavaScript-объект ошибки. В скобках передается текстовое сообщение (message),
                    которое объясняет, что именно пошло не так (в нашем случае получится строка вроде "Server Error: 404").

                    throw — ключевое слово, которое «выбрасывает» эту ошибку.
                    Оно моментально прерывает выполнение текущей функции и «перепрыгивает» прямо в ближайший блок catch.

                    2. Зачем это нужно при работе с fetch?
                    В отличие от того же axios или старого $.ajax, метод fetch НЕ считает ошибки HTTP-статусов (404, 500) поводом для попадания в catch.

                    Для fetch запрос считается успешным, пока есть связь с сервером (даже если сервер ответил "Ошибка 404: Страница не найдена").
                    В catch он уходит только при сбое сети (например, пропал интернет).
                    Поэтому мы должны проверять флаг response.ok вручную
                */
            }

            /* await word */
            const data = await response.json();

            console.log(data);
            console.log(data[0].character)

            //[0] because api returning array of objects
            return data[0].character;

        }
        catch(e) {
            console.log(`Error in ajax fetch: ${e}`);
        }
    }

})();