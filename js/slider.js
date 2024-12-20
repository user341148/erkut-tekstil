let currentIndex = 0; /*şu anda gösterilen slaytın indeksi 0 olarak ayarlanır*/

function updateSlider() {
  const slider = document.querySelector('.slider'); /*.slider öğesini seçer ve slider değişkenine atar*/
  slider.style.transform = `translateX(-${currentIndex * 100}%)`; /*slidr öğesinin transform stilini translateX kullanarak güncelledi. translateX fonksiyonu kaydırıcı yatay olarak hareket ettirir. currentIndex * 100 ifadesi de kaydırıcının ne kadar hareket edeceğini belirler. bu, her slaytın genişliğini %100 yapar ve her slayt tam genişlikte bir alan kapsar */
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide'); /*.slide sınıfına sahip tüm öğeleri seçti ve slides!a atadı*/
  if (currentIndex < slides.length - 1) { /*slayların toplam sayısından bir eksik olup olmadığını kontrol ediyor. eğer currentIndex, slaytların toplam sayısından küçükse bir sonraki slayta geçişi yapılır*/
    currentIndex++; /*currentIndex bir arttırılır ve bir sonraki slayta geçer*/
    updateSlider(); /*yeni slaytın görüntülenmesi sağlanır*/
  }
}

function prevSlide() {
  if (currentIndex > 0) { /*eğer currentIndex 0'dan büyükse,*/
    currentIndex--; /*currentIndex bir azaltılır*/
    updateSlider(); /*ve updateSlider fonksiyonu çağrılır*/
  } /*böylelikle slider'da ileri geri hareket etme sağlanır*/
}
