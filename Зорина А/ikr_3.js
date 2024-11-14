// 3

async function fetchWithTimeout(url, max_time) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), max_time);
  
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Время ожидания истекло');
      }
      throw error;
    }
  }
  
  fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 3000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error.message));