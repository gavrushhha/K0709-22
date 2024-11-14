async function loadAllData(urls) {
    try {
        const fetchPromises = urls.map(
            url => fetch(url).then(
                response => {
                    if (!response.ok) {
                        throw new Error('ошибка сети');
                    }
                    return response.json();
                }
            )
        );
        const data = await Promise.all(fetchPromises);
        return data;
    } catch (error) {
        return error;
    }
}

const urls = [
    'https://catfact.ninja/fact',
    'https://dog.ceo/api/breeds/image/random',
    'https://api.agify.io/?name=michael'
];

loadAllData(urls)
    .then(data => {
        console.log('Все данные загружены:', data);
    })
    .catch(error => {
        console.error(error);
    });
