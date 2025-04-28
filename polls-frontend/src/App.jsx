import { useEffect, useState } from 'react';
import './App.css';

function App() {
    // Створюємо константу для збереження списку питань
    const [questions, setQuestions] = useState([]);

    // Використовуємо useEffect для отримання даних з сервера
    useEffect(() => {
        fetch('http://127.0.0.1:8000/polls/api/questions/')  // Запит до серверу за вказаним URL
            .then(res => res.json())  // Перетворюємо відповідь у формат JSON
            .then(data => setQuestions(data));  // Зберігаємо отримані дані в state
    }, []);  // Пустий масив означає, що цей ефект буде виконано тільки один раз при монтуванні компонента

    return (
        <div>
            {/* Виводимо кожне питання */}
            {questions.map(question => (
                <div key={question.id}>
                    <h1>{question.question_text}</h1>
                    <p>{question.pub_date}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
