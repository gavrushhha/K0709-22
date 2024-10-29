function* lazyLoadImages(images) {
    for (const image of images) {
        yield new Promise(resolve => {
            setTimeout(() => {
                console.log(`Загружено: ${image}`);
                resolve();
            }, 1000);
        });
    }
}

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const imagesGen = lazyLoadImages(images);

const loadNextImage = async () => {
    const { done } = imagesGen.next();
    if (!done) {
        await loadNextImage();
    }
};

loadNextImage();