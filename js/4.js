document.getElementById("contact-form").addEventListener("submit", function (e) { /*formun gönderilme olayını dinler ve bir işlev çalıştır*/
    e.preventDefault(); /*sayfanın yeniden yüklenmesini engeller*/

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value; /*değerleri aldı*/

    if (name && email && message) { /*tüm alanlar dolduruysa*/
        console.log("Ad:", name);
        console.log("E-posta:", email);
        console.log("Mesaj:", message);

        alert("Mesajınız başarıyla gönderildi!");
        document.getElementById("contact-form").reset(); /*başarı mesajı ve form sıfırlanması*/
    } else {
        alert("Lütfen tüm alanları doldurun."); /*tüm alanlar doldurulmadıysa*/
    }
});
