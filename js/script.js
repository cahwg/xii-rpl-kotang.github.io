const data = [
  { nama: "Abiseka Zara Suprada", img: "abi.jpg" },
  { nama: "Agil Muzaki Ahmad", img: "agil.jpg" },
  { nama: "Asrul Syahrian", img: "asrul.jpg" },
  { nama: "Fandi Christian Asyer", img: "fandi.jpg" },
  { nama: "Haddad Razib Pangestu", img: "rajib.jpg" },
  { nama: "Hasan Rizqi Abdur Rohman", img: "hasan,jpg" },
  { nama: "Ibnu Firmansyah", img: "ibnu.jpg" },
  { nama: "M. Fadli Juliansyah", img: "fadli.jpg" },
  { nama: "M. Fardhan Syarif", img: "fardhan.jpg" },
  { nama: "Noval Riansyah Sudar", img: "noval.jpg" },
];




let currentPage = 1;
const itemsPerPage = 5;

function renderData() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(startIndex, endIndex);

  const container = document.getElementById("data-container");
  container.innerHTML = "";

  itemsToShow.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${startIndex + index + 1}</td><td>${item.nama}</td><td><img src="img/${item.img}" class="img-fluid" width="40"></td>`;
    container.appendChild(row);
  });

  document.getElementById("page-info").innerText = `Halaman ${currentPage} dari ${Math.ceil(data.length / itemsPerPage)}`;
}

function nextPage() {
  if (currentPage * itemsPerPage < data.length) {
    currentPage++;
    renderData();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderData();
  }
}

renderData();

// Ambil elemen overlay dan tombol
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const closeSound = document.getElementById('close-sound');

// Fungsi buat tutup overlay + mainin suara
function closeOverlay() {
  closeSound.play(); // Putar suara
  AOS.init();
  setTimeout(() => {
    overlay.style.display = 'none'; // Hilangkan overlay setelah suara mulai diputar
  }, 500); // Delay dikit biar efeknya smooth
}

// Event listener buat klik tombol
closeBtn.addEventListener('click', function (event) {
  event.stopPropagation(); // Biar klik tombol nggak trigger overlay
  closeOverlay();
});

// Event listener buat klik overlay
overlay.addEventListener('click', closeOverlay);

function openRahasia() {
  Swal.fire({
    html: `<strong>"Apa Rahasianya?"</strong><br><br>
            "Rahasia? Nggak ada, cuma <span class='text-info'>baris demi baris kode</span> yang kami tulis dengan penuh perjuangan.  
            Gini doang webnya? <span class='text-warning'>Iya, ini bukan sekadar web, tapi kenangan digital</span> yang bakal selalu ada.  
            Terima kasih buat para <span class='text-success'>developer hebat masa depan</span> yang udah mampir!  
            Semoga kita sukses bareng, bikin aplikasi keren, dan terus berkembang!  
            <span class='color-red' id='heart'>&hearts;</span><span class='color-red' id='heart'>&hearts;</span>"`,
    icon: "info"
  });
}

function openAllFoto() {
  Swal.fire("Sabar", "link Google Drive Belum siaap, mwehehe");
}
