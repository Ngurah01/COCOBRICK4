//animasi navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px"; // Adjust this value based on your navbar height
    }
    prevScrollpos = currentScrollPos;
}

//animasi slide 2 home
document.addEventListener("DOMContentLoaded", function () {
    var productDescription = document.getElementById("productDescription");
    var boxImage = document.getElementById("boxImage");

    // Mengatur animasi untuk gambar datang dari kanan
    boxImage.style.animation = "slideFromRight 4s ease-in-out forwards";

    // Mengatur animasi untuk teks datang dari kiri
    productDescription.style.animation = "slideFromLeft 4s ease-in-out forwards";

    // Menambahkan kelas animate untuk menampilkan elemen setelah animasi selesai
    setTimeout(function () {
        productDescription.classList.add("animate");
        boxImage.classList.add("animate");
    }, 1000); // Sesuaikan dengan durasi animasi, dalam kasus ini 1 detik
});


//email
function sendEmail(event) {
    event.preventDefault(); // Mencegah form dari pengiriman normal

    // Ambil nilai dari input dan textarea
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Format subjek dan tubuh email
    var subject = 'Contact Form Submission';
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message;

    // Buka klien email default pengguna
    var mailtoLink = 'mailto:coconutbriket14@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}
