# Web Server Kelompok 1

Proyek ini merupakan tugas kelompok mata kuliah **Pemrograman Berbasis Platform Web**. Aplikasi dikembangkan menggunakan Node.js dan Express.js untuk membuat web server sederhana yang menampilkan informasi identitas kelompok, anggota, dan mata kuliah.

## Deskripsi Proyek

Web Server Kelompok 1 merupakan aplikasi berbasis web yang menyediakan beberapa halaman informasi dan endpoint API. Aplikasi ini dibuat sebagai penerapan materi Node.js dan Express.js.

## Teknologi yang Digunakan

- **Node.js** sebagai runtime JavaScript.
- **Express.js** sebagai framework web server.
- **HTML** untuk struktur halaman.
- **CSS** untuk tampilan antarmuka.
- **JSON** untuk format data API.

## Identitas Kelompok

| Keterangan | Informasi |
|---|---|
| Kelompok | Kelompok 1 |
| Kelas | TI25G |
| Program Studi | Teknik Informatika |
| Universitas | Universitas Nusa Putra |

## Anggota Kelompok

| No. | Nama | NIM |
|---|---|---|
| 1 | Abu Nur Al-Faruq | 20220040223 |
| 2 | Abdul Wahab Rohmatullah | 20250040181 |
| 3 | Adam Rifaldi | 20250040134 |
| 4 | Adinda Anggraena Saputri | 20250040014 |

## Informasi Mata Kuliah

| Keterangan | Informasi |
|---|---|
| Mata Kuliah | Pemrograman Berbasis Platform Web |
| Dosen Pengampu | Shintya Ayuningtias, M.Kom |
| Materi | Node.js dan Express.js |
| Semester | 3 |

## Fitur dan Routing

Aplikasi memiliki beberapa route yang dapat diakses melalui browser.

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/` | Mengarahkan pengguna ke halaman beranda |
| GET | `/beranda` | Menampilkan halaman utama |
| GET | `/identitas` | Menampilkan identitas kelompok |
| GET | `/matkul` | Menampilkan informasi mata kuliah |
| GET | `/anggota` | Menampilkan daftar anggota kelompok |
| GET | `/tentang` | Menampilkan informasi tentang proyek |
| GET | `/api/kelompok` | Menampilkan data kelompok dalam format JSON |

Aplikasi juga menyediakan halaman **404 Not Found** untuk menangani alamat atau route yang tidak ditemukan.

## Struktur Folder

```text
webserver-kelompok/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Instalasi dan Menjalankan Aplikasi

Pastikan Node.js dan npm sudah terpasang di komputer.

**1. Clone repository**

```bash
git clone https://github.com/AlfaruqTi22E/webserver-kelompok.git
```

**2. Masuk ke direktori proyek**

```bash
cd webserver-kelompok
```

**3. Install dependencies**

```bash
npm install
```

**4. Jalankan server**

```bash
npm start
```

Jika server berhasil dijalankan, buka browser dan akses:

```text
http://localhost:3000
```

## Pengujian Endpoint

Beberapa endpoint yang dapat diuji melalui browser:

- Halaman utama: `http://localhost:3000/beranda`
- Identitas kelompok: `http://localhost:3000/identitas`
- Informasi mata kuliah: `http://localhost:3000/matkul`
- Daftar anggota: `http://localhost:3000/anggota`
- Tentang proyek: `http://localhost:3000/tentang`
- API kelompok: `http://localhost:3000/api/kelompok`

## Repository

Source code proyek dapat diakses melalui GitHub:

[Web Server Kelompok 1](https://github.com/AlfaruqTi22E/webserver-kelompok)

---

**Universitas Nusa Putra**  
**Program Studi Teknik Informatika**  
**2026**
