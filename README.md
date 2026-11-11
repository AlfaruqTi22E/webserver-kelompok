Web Server Kelompok 1

1. Deskripsi Proyek

Web Server Kelompok 1 merupakan proyek tugas mata kuliah Pemrograman Berbasis Platform Web. Website ini dikembangkan menggunakan Node.js dan Express.js untuk menampilkan informasi kelompok, identitas mata kuliah, daftar anggota, serta informasi website melalui beberapa endpoint (route).

2. Teknologi yang Digunakan

- Node.js
- Express.js
- JavaScript
- HTML
- CSS

3. Identitas Kelompok

Keterangan| Informasi
Nama Kelompok| Kelompok 1
Kelas| TI25G
Program Studi| Teknik Informatika
Universitas| Universitas Nusa Putra

4. Daftar Anggota Kelompok

No.| Nama| NIM
1| Abu Nur Al-Faruq| 20220040223
2| Abdul Wahab Rohmatullah| 20250040181
3| Adam Rifaldi| 20250040134
4| Adinda Anggraena Saputri| 20250040014

5. Identitas Mata Kuliah

Keterangan| Informasi
Mata Kuliah| Pemrograman Berbasis Platform Web
Materi| Node.js dan Express.js

6. Daftar Endpoint (Route)

No.| Method| Endpoint| Fungsi
1| GET| "/"| Halaman utama / pengalihan ke beranda
2| GET| "/beranda"| Menampilkan halaman sambutan
3| GET| "/identitas"| Menampilkan identitas kelompok
4| GET| "/matkul"| Menampilkan identitas mata kuliah
5| GET| "/anggota"| Menampilkan daftar anggota kelompok
6| GET| "/tentang"| Menampilkan informasi tentang website
7| GET| "/api/kelompok"| Menampilkan data kelompok dalam format JSON

7. Struktur Folder

webserver-kelompok/
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md

8. Cara Menjalankan Website

Pastikan Node.js sudah terinstal pada komputer.

Langkah 1. Clone Repository

git clone https://github.com/AlfaruqTi22E/webserver-kelompok.git

Langkah 2. Masuk ke Folder Project

cd webserver-kelompok

Langkah 3. Install Dependencies

npm install

Langkah 4. Jalankan Web Server

npm start

Langkah 5. Buka Website

Akses alamat berikut melalui browser:

http://localhost:3000

9. Pengujian Endpoint

Setelah server berhasil dijalankan, lakukan pengujian melalui browser menggunakan alamat berikut:

1. http://localhost:3000/beranda
2. http://localhost:3000/identitas
3. http://localhost:3000/matkul
4. http://localhost:3000/anggota
5. http://localhost:3000/tentang
6. http://localhost:3000/api/kelompok

Setiap endpoint menampilkan informasi sesuai dengan fungsi masing-masing. Endpoint API menampilkan data kelompok dalam format JSON.

10. Repository GitHub

Source code dan dokumentasi proyek dapat diakses melalui repository berikut:

GitHub:
https://github.com/AlfaruqTi22E/webserver-kelompok

---

Universitas Nusa Putra
Program Studi Teknik Informatika
Mata Kuliah Pemrograman Berbasis Platform Web
