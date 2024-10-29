async function* lazyLoadImages(images) {
    for (const image of images) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        yield `Загружено: ${image}`
    }
}

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

(async () => {
    const loader = lazyLoadImages(images)
    for await (const message of loader) {
        console.log(message)
    }
})()