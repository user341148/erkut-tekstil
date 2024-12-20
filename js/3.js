/*resime tıklandığında resimlerin değişmesini sağlar*/
let imageIndex = 0; 
const imageSources = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg"]; 

function changeImage() {
    const image = document.getElementById("about-image");/*html'de id değeri "about-image" olan öğeyi seçer ve image değişkenine atar*/
    imageIndex = (imageIndex + 1) % imageSources.length; /*imageIndex değişkenini bir artırır ve imageSources dizisinin uzunluğuna göre mod alır (bölümünden kalanı bulur).böylelikle imageIndex değişkeni imageSources dizisinin sınırları içinde kalır.*/
    image.src = imageSources[imageIndex]; /*image öğesinin yeni bir görüntüyü göstermesini sağlar*/
}
