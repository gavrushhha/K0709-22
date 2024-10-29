async function* lazyLoadImages(paths) {
    for (const path of paths) {
        yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(`${path} loaded`)
            }, 1000)
        })
    }
}

const paths = ["image1.jpg", "image2.jpg", "image3.jpg"];


(async () => {
    const files = lazyLoadImages(paths)
    for await (const file of files) {
        console.log(file)
    }
})()
