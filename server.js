const express = require("express");
const app = express();

const PORT = 3000;

// ===================================
// DATA IDENTITAS KELOMPOK
// ===================================

const kelompok = {
    nama: "Kelompok 1",
    kelas: "TI25G",
    programStudi: "Teknik Informatika",
    universitas: "Universitas Nusa Putra",

    anggota: [
        {
            nama: "Abu Nur Al-Faruq",
            nim: "20220040223"
        },
        {
            nama: "Abdul Wahab Rohmatullah",
            nim: "20250040181"
        },
        {
            nama: "Adam Rifaldi",
            nim: "20250040134"
        },
        {
            nama: "Adinda Anggraena Saputri",
            nim: '20250040014'
        }
    ]
};

// ===================================
// DATA MATA KULIAH
// ===================================

const matkul = {
    nama: "Pemrograman Berbasis Platform Web",
    dosen: "Shintya Ayuningtias, M.Kom",
    materi: "Node.js dan Express.js",
    semester: "Semester 3"
};

// ===================================
// TEMPLATE HALAMAN WEBSITE
// ===================================

function halaman(judul, isi) {
    return `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <title>${judul}</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                background: #f1f5f9;
                color: #1e293b;
            }

            nav {
                background: #1e3a8a;
                padding: 18px;
                text-align: center;
            }

            nav a {
                color: white;
                text-decoration: none;
                margin: 0 12px;
                font-weight: bold;
            }

            nav a:hover {
                color: #facc15;
            }

            .container {
                max-width: 850px;
                margin: 40px auto;
                padding: 30px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 12px
                    rgba(0,0,0,0.08);
            }

            h1 {
                color: #1e3a8a;
                margin-bottom: 20px;
            }

            p {
                line-height: 1.8;
                margin-bottom: 12px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }

            th, td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
            }

            th {
                background: #1e3a8a;
                color: white;
            }

            tr:nth-child(even) {
                background: #f1f5f9;
            }

            .button {
                display: inline-block;
                background: #1e3a8a;
                color: white;
                padding: 12px 20px;
                text-decoration: none;
                border-radius: 6px;
                margin-top: 15px;
            }

            .button:hover {
                background: #2563eb;
            }

            footer {
                text-align: center;
                padding: 20px;
                color: #64748b;
                margin-top: 30px;
            }

            @media (max-width: 600px) {
                nav a {
                    display: inline-block;
                    margin: 7px;
                }

                .container {
                    margin: 20px;
                    padding: 20px;
                }
            }
        </style>
    </head>

    <body>

        <nav>
            <a href="/beranda">Beranda</a>
            <a href="/identitas">Identitas</a>
            <a href="/matkul">Mata Kuliah</a>
            <a href="/anggota">Anggota</a>
            <a href="/tentang">Tentang</a>
        </nav>

        <div class="container">
            ${isi}
        </div>

        <footer>
            <p>
                Web Server Kelompok |
                ${kelompok.programStudi}
            </p>
            <p>
                ${kelompok.universitas}
            </p>
        </footer>

    </body>
    </html>
    `;
}

// ===================================
// ROUTE 1: HALAMAN BERANDA
// URL: /beranda
// ===================================

app.get("/", (req, res) => {
    res.redirect("/beranda");
});

app.get("/beranda", (req, res) => {

    const isi = `
        <h1>Selamat Datang!</h1>

        <p>
            Selamat datang di website resmi
            kelompok kami.
        </p>

        <p>
            Website ini dibuat sebagai tugas
            mata kuliah Pemrograman Berbasis
            Platform Web.
        </p>

        <p>
            Kami menggunakan teknologi
            Node.js dan Express.js untuk
            membangun sebuah web server.
        </p>

        <a href="/identitas" class="button">
            Lihat Identitas Kelompok
        </a>
    `;

    res.send(halaman("Beranda", isi));
});

// ===================================
// ROUTE 2: IDENTITAS KELOMPOK
// URL: /identitas
// ===================================

app.get("/identitas", (req, res) => {

    const isi = `
        <h1>Identitas Kelompok</h1>

        <p><b>Nama Kelompok:</b> ${kelompok.nama}</p>

        <p><b>Kelas:</b> ${kelompok.kelas}</p>

        <p><b>Program Studi:</b>
        ${kelompok.programStudi}</p>

        <p><b>Universitas:</b>
        ${kelompok.universitas}</p>
    `;

    res.send(halaman("Identitas Kelompok", isi));
});

// ===================================
// ROUTE 3: IDENTITAS MATA KULIAH
// URL: /matkul
// ===================================

app.get("/matkul", (req, res) => {

    const isi = `
        <h1>Identitas Mata Kuliah</h1>

        <p><b>Nama Mata Kuliah:</b>
        ${matkul.nama}</p>

        <p><b>Dosen Pengampu:</b>
        ${matkul.dosen}</p>

        <p><b>Materi:</b>
        ${matkul.materi}</p>

        <p><b>Semester:</b>
        ${matkul.semester}</p>
    `;

    res.send(halaman("Mata Kuliah", isi));
});

// ===================================
// ROUTE 4: DAFTAR ANGGOTA
// URL: /anggota
// ===================================

app.get("/anggota", (req, res) => {

    let daftarAnggota = "";

    kelompok.anggota.forEach((anggota, index) => {

        daftarAnggota += `
            <tr>
                <td>${index + 1}</td>
                <td>${anggota.nama}</td>
                <td>${anggota.nim}</td>
            </tr>
        `;
    });

    const isi = `
        <h1>Daftar Anggota Kelompok</h1>

        <p>
            Berikut merupakan daftar anggota
            kelompok kami.
        </p>

        <table>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>NIM</th>
            </tr>

            ${daftarAnggota}
        </table>
    `;

    res.send(halaman("Daftar Anggota", isi));
});

// ===================================
// ROUTE 5: TENTANG WEBSITE
// URL: /tentang
// ===================================

app.get("/tentang", (req, res) => {

    const isi = `
        <h1>Tentang Website</h1>

        <p>
            Website ini merupakan proyek
            pembuatan web server kelompok
            menggunakan Node.js dan Express.js.
        </p>

        <p><b>Teknologi:</b> Node.js</p>

        <p><b>Framework:</b> Express.js</p>

        <p><b>Bahasa Pemrograman:</b> JavaScript</p>

        <p><b>Tujuan:</b> Memahami konsep
        web server dan routing.</p>
    `;

    res.send(halaman("Tentang Website", isi));
});

// ===================================
// ENDPOINT TAMBAHAN: API KELOMPOK
// URL: /api/kelompok
// ===================================

app.get("/api/kelompok", (req, res) => {

    res.json({
        status: "success",
        pesan: "Data kelompok berhasil ditampilkan",
        data: kelompok
    });

});

// ===================================
// ERROR 404
// ===================================

app.use((req, res) => {

    res.status(404).send(
        halaman(
            "404 Not Found",
            `
                <h1>404 - Halaman Tidak Ditemukan</h1>
                <p>Maaf, halaman yang Anda cari
                tidak tersedia.</p>
                <a href="/beranda" class="button">
                    Kembali ke Beranda
                </a>
            `
        )
    );

});

// ===================================
// MENJALANKAN SERVER
// ===================================

app.listen(PORT, () => {

    console.log("==============================");
    console.log("WEB SERVER KELOMPOK BERJALAN");
    console.log("==============================");
    console.log(`Server: http://localhost:${PORT}`);
    console.log("==============================");

});