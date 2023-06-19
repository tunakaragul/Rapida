const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.getElementById("container").appendChild(canvas);

let particles = [];
let particleColor = "rgba(255,0,0,0.7)";
function resize() {
  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight - 50;
}

function createParticles() {
  particles = [];
  const particlesCount = Math.floor((canvas.width * canvas.height) / 100);

  for (let i = 0; i < particlesCount; i++) {
    // Create a bias towards the center of the screen
    const bias = Math.random() * 0.3 + 0.35;

    const x =
      Math.random() * canvas.width * bias + (canvas.width * (1 - bias)) / 2;
    const y =
      Math.random() * canvas.height * bias + (canvas.height * (1 - bias)) / 2;

    const size = Math.random() * 0.95;
    particles.push({ x, y, size });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.sin(i + Date.now() / 1000) * 0.5;
    p.y += Math.cos(i + Date.now() / 1000) * 0.5;

    let max_x =
      canvas.width * 0.8 +
      Math.sin((p.y / canvas.height) * Math.PI * 2) * (canvas.width * 0.12);

    if (p.x > max_x) {
      p.x = max_x;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = particleColor;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", () => {
  resize();
  createParticles();
});

resize();
createParticles();
animateParticles();

var navItems = document.querySelectorAll(".info nav ul li");
var footerText = document.querySelector(".footer-text");

var contents = {
  Anasayfa: `<div class="anasayfa">Rapida Filo'ya Hoşgeldiniz</div>`,
  Hakkımızda:
    "Rapida Otomotiv Turizm Ltd. Şti., Filo Yönetimi ve Operasyonel Araç Kiralama sektöründe faaliyet göstermek amacı ile kurulmuş olup, deneyimli kadrosu ve müşteri odaklı hizmet anlayışı ile Kurumsal müşterilerine finansal ve teknolojik gelişmeler çerçevesinde uzun dönem araç kiralama hizmeti sunmaktadır. RAPİDA FİLO Felsefesi, en uygun fiyat ile operasyonel mükemmelliği müşterilerine sunmaktır",
  KurucuOrtak: `<div class="kurucu-ortak-container">
  <div class="kurucu-ortak-header">
    <h2>Levent Karagül</h2>
    <img class="icon" src="ppp.jpg" alt="Icon description" />
  </div>
  <p>
  1982 yılı Bursa Işıklar Askeri lisesinden, 1986 yılında Ankara Kara Harp okulundan mezun oldu. 10 yıl Silahlı kuvvetlerde çeşitli kademelerde, son yılında da Birleşmiş Milletler Barış Gücünde görev yaptıktan sonra yüzbaşı rütbesindeyken istifa ederek 1997 yılında Silahlı Kuvvetlerden ayrılma kararı verdi.
  1997 yılında ispanyol MAPFRE grubuna bağlı TUR ASSIST şirketinde Network Manager olarak göreve başladı. Son 8 yılını Genel Müdür Yardımcısı olmak üzere yaklaşık 20 yıl TUR ASSIST firmasında görev aldı.
  2017 şubat ayında MAPFRE Grubunun Sigorta şirketi olan MAPFRE Sigorta'ya Operasyonlardan Sorumlu Genel Müdür Yardımcısı ve İcra Kurulu Üyesi olarak atandı.
  2020 haziran ayında MAPFRE Sigortadaki görevlerinden ayrılarak RAPİDA Otomotiv Turizm Şirketini kurdu ve uzun dönem filo yönetimi alanında faaliyet göstermeye başladı.
  </p>
</div>
  
  `,
  Hizmetlerimiz: `
  <li class="hizmet-header">İş yönetimi
  <ul class="hizmet-list">
    <li>İş Yönetimi</li>
    <li>Risk danışmanlığı</li>
    <li>Filo optimizasyonu</li>
    <li>Stratejik danışmanlık</li>
    <li>Verimlilik yönetimi</li>
  </ul>
</li>
<li class="hizmet-header">Filo Yönetimi
  <ul class="hizmet-list">
    <li>Tedarik ve tedarikçi stratejileri</li>
    <li>Satın alma</li>
    <li>Lisanslama ve mevzuatlara uyum</li>
    <li>Stok, yakıt, kaza yönetimi</li>
    <li>Arıza ve bakım yönetim modellemeleri</li>
  </ul>
</li>
<li class="hizmet-header">Teknoloji
  <ul class="hizmet-list">
    <li>Gelişmiş raporlama sistemi</li>
    <li>Analiz ve tahminleme sistemleri</li>
    <li>Şirketlerin filo risk analizleri</li>
    <li>Sistem entegrasyonları</li>
  </ul>
</li>
<li class="hizmet-header">Şoför Performans Yönetimi
  <ul class="hizmet-list">
    <li>Şoför performans ölçümleme</li>
    <li>Şoför risk haritası</li>
    <li>İhlal ve uyumsuzluk yönetimi</li>
    <li>Geri besleme ve eğitim</li>
  </ul>
</li>
  `,
  KVKK: "RAPIDA FILO, Kişisel verilerin korunması ve veri mahremiyeti politikaları çerçevesinde, müşterilerinin kişisel verilerin işlenmesine yönelik kuralları yürürlükteki güncel mevzuatlara uyum içerisinde, şeffaflık ve açıklık ilkelerine uygun olarak belirlemekte ve hayata geçirmektedir.",
  İletişim: `<form id="contactForm" action="https://formsubmit.co/tunakaragul3@gmail.com" method="POST">
  <input id="name" class="form-input" type="text" name="name" placeholder="Adınız" required>
  <input id="phone" class="form-input" type="tel" name="tel" placeholder="Telefon" required>
  <input id="email" class="form-input" type="email" name="email" placeholder="Email" required>
  <textarea id="explanation" class="form-input" name="message" placeholder="Mesajınız" required></textarea>
  <input type="submit" value="Gönder">
</form>
`,
};

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

function handleClick(e) {
  navItems.forEach((item) => {
    item.classList.remove("active"); // Remove 'active' class from all items
  });

  e.target.classList.add("active"); // Add 'active' class to the clicked item

  // Fade out the footer text
  footerText.style.opacity = 0;

  // Change the footer text after the transition is done
  setTimeout(function () {
    footerText.innerHTML = contents[e.target.innerText];
    // Change the width if the selected item is 'KurucuOrtak'
    if (e.target.innerText == "KurucuOrtak") {
      footerText.style.width = "27%";
    } else {
      footerText.style.width = "25%";
    }

    // Toggle display of hizmet lists if the selected item is 'Hizmetlerimiz'
    if (e.target.innerText == "Hizmetlerimiz") {
      var hizmetHeaders = document.querySelectorAll(".hizmet-header");
      var hizmetLists = document.querySelectorAll(".hizmet-list");

      hizmetLists.forEach((list) => {
        list.style.display = "none";
      });

      hizmetHeaders.forEach((header) => {
        var list = header.querySelector(".hizmet-list");

        if (header === e.target) {
          list.style.display = "block";
        }

        header.addEventListener("click", function () {
          hizmetLists.forEach((list) => {
            if (list !== this.querySelector(".hizmet-list")) {
              list.style.display = "none";
            }
          });

          if (list.style.display === "none") {
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        });
      });
    }

    // Fade in the new footer text
    footerText.style.opacity = 1;
  }, 1000); // 1s transition
}

navItems.forEach((item) => {
  item.style.cursor = "pointer"; // Add pointer cursor for clickable effect
  item.addEventListener("click", handleClick);
});

var themeSwitcher = document.querySelector("#theme-switcher");
themeSwitcher.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  // Change particle color based on the theme
  if (document.body.classList.contains("light-mode")) {
    particleColor = "rgba(0,0,0,1)"; // black color in light mode
  } else {
    particleColor = "rgba(255,0,0,0.4)"; // original color in dark mode
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var explanation = document.getElementById("explanation").value;

      // Simple validation
      if (!name || !phone || !email || !explanation) {
        alert("Please fill all fields");
        return;
      }

      // TODO: Send data to the server
      console.log(name, phone, email, explanation);
    });
  }
});
/*window.addEventListener("load", function () {
  const loader = document.getElementById("loading");
  setTimeout(function () {
    loader.classList.add("fadeOut");
  }, 1500);
});*/
