
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function* lazyLoadImages(images) {
    for (const image of images) {
        await delay(1000)
        yield `Загружено: ${image}`
    }
}

const imagePaths = ["image1.jpg", "image2.jpg", "image3.jpg"];

(async () => {
    const imageLoader = lazyLoadImages(imagePaths);
    for await (const message of imageLoader) {
        console.log(message);
    }
})();
