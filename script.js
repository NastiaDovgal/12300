document.getElementById('generate-btn').addEventListener('click', function() {
    const imgElement = document.getElementById('meme-img');
    const placeholder = document.getElementById('placeholder-text');

// Знаходимо елементи
const homeLink = document.querySelector('nav a:nth-child(2)'); // Home
const contactsLink = document.querySelector('nav a:nth-child(1)'); // Contacts
const homeSection = document.querySelector('.content:not(#contacts-page)');
const contactsSection = document.getElementById('contacts-page');

// Функція для показу контактів
contactsLink.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.style.display = 'none';
    contactsSection.style.display = 'flex';
});

// Функція для повернення на головну
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactsSection.style.display = 'none';
    homeSection.style.display = 'flex';
});

// Логіка генерації картинки (залишається з попереднього кроку)
document.getElementById('generate-btn').addEventListener('click', function() {
    // ... твій код для API ...
});

    // Використовуємо TheCatAPI для прикладу, або можна вставити посилання на Pusheen
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catUrl = data[0].url;
            
            imgElement.src = catUrl;
            imgElement.style.display = 'block';
            placeholder.style.display = 'none';
        })
        .catch(err => {
            console.error("Помилка завантаження:", err);
            alert("Ой! Котик загубився. Спробуй ще раз.");
        });
});