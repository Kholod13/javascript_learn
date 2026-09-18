const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());           // разрешаем запросы с фронтенда
app.use(express.json());   // позволяет читать JSON из body POST-запросов

// GET — просто отдать данные
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Привет с сервера!' });
});

// GET с параметром в URL
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'Пользователь ' + id });
});

// POST — принять данные от фронта
app.post('/api/message', (req, res) => {
    const { text } = req.body;
    console.log('Получено от клиента:', text);
    res.json({ status: 'ok', received: text });

});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});