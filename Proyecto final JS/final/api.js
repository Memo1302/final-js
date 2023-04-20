const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4165690200mshc4acc77c2be862ap1f9597jsn19b70a99bb39',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const container = document.getElementById('temperatura');

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Argentina', options)
    .then(response => response.json())
    .then(response => {
        const p = document.createElement('p');
        p.textContent = `Mar del Plata: ${response.current.temp_c} °C`;
        container.appendChild(p);
    })
    .catch(err => console.error(err));
