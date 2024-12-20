/*sayfa içindeki bağlantılara anchor tıklayarak gidilmek istenen bölüme smooth scroll efekti ekler*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => { /*href özelliği # ile başlayan tüm bağlantıları seçer*/
    anchor.addEventListener('click', function(e) { /*her bağlantı için bir tıklama olayı dinleyicisi ekler*/
        e.preventDefault();  /*default özellik olan tıklanıldığında direkt ilgili bölüme inmesini engeller*/
        

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  /*href'teki değeri alır ve bu değere sahip öğeye scrollIntoView özelliğiyle smooth scroll özelliği ekler*/
        });
    });
});
