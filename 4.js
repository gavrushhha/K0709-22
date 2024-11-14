const fetchAndTransform = async (urls) => {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
  
      const data = await Promise.all(responses.map(async (response, index) => {
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке с URL ${urls[index]}: ${response.status} ${response.statusText}`);
        }
        const text = await response.text();
        if (!text.id || !text.title) {
            throw new Error(`text с URL ${urls[index]} не содержит полей id или title`);
        }
        return { id: text.id, title: text.title };
      }));
  
      return data;
    } catch (error) {
      console.error("Ошибка:", error);
      return "Ошибка загрузки";
    }
  };
  
  const urls = [
    'https://www.google.com',
    'https://mail.google.com',
    'https://www.msi.com'
  ];
  
  fetchAndTransform(urls)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
