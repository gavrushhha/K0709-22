function* lazyLoadImages(images) {
    for (const image of images) {
        yield new Promise(resolve => {
            setTimeout(() => {
                resolve(`Загружено: ${image}`);
            }, 1000);
        });
    }
}

const imagePaths = ["image1.jpg", "image2.jpg", "image3.jpg"];

async function loadImages(imagePaths) {
    const imageGenerator = lazyLoadImages(imagePaths);

    for await (const message of imageGenerator) {
        console.log(message);
    }
}

loadImages(imagePaths);