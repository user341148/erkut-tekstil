/*sayfa tamamen yüklendiğinde document.body öğesine 'loaded' sınıfı eklenir ve sayfa tamamen yüklendiğinde js işlevleri devreye girer.*/
window.addEventListener("load", function() {
    document.body.classList.add('loaded');
});
