function* lazyLoadImages(listImages) {
    for (const image of listImages) {
        console.log(`Начинает загрузку изображения ${image}`)
        setTimeout(() => {
            console.log(`Загружено: ${image}`)
        }, 1000)
    }
}

const listImages =  ["image1.jpg", "image2.jpg", "image3.jpg"]

const res = lazyLoadImages(listImages)

for (let _ = 0; _ < listImages.length; _++) {
    res.next()
    
};