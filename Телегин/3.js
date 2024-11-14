async function fetchwithretryAndTimeout(url, timeout,retries){
    dt = new Date();
    retry = 0;
    while (new Date() - dt < timeout*1000 && retry < retries){//в секундах
        response = await fetch(url);
        ans = await response.json()
        console.log(ans);
        retry++;
    }
}

fetchwithretryAndTimeout('https://jsonplaceholder.typicode.com/users/1', 10, 1);