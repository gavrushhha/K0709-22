/* Создайте функцию lazyLoadImages, которая принимает массив изображений и "загружает" их, используя задержку. Реализуйте это как генератор, где каждое изображение "загружается" с задержкой в 1 секунду (имитируется с помощью setTimeout или await).

Проверка:

Создайте массив с путями к изображениям: ["image1.jpg", "image2.jpg", "image3.jpg"].
Используйте генератор для вывода в консоль "Загружено: imageX.jpg". */

function* lazyLoadImages(image){
    for(const image of images){
        yield new Promise(resove => {
            setTimeout(() =>{
                console.log(`Загружено: ${image}`);
                resove();
            }, 500);
        });
    }
}

const images =  ["image1.jpg", "image2.jpg", "image3.jpg"];

(async () => {
    const generator = lazyLoadImages(images);
    for await (const _ of generator) {}
})();