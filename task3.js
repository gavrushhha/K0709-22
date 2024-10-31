async function* lazyLoadImages(imgNames) {
    for (const img of imgNames){
        await new Promise(s => setTimeout(s, 1000));
        yield img;
    }
}

const imgNames = ["image1.jpg", "image2.jpg", "image3.jpg"];


(async () => {
    const files = lazyLoadImages(imgNames);
    for await (const img of files){
        console.log(`Загружено: ${img}`)
    }
})();