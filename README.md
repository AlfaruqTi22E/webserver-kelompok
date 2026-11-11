Web Server Kelompok 1

Deskripsi Proyek

Web Server Kelompok 1 merupakan proyek tugas mata kuliah Pemrograman Berbasis Platform Web. Website ini dibuat menggunakan Node.js dan Express.js untuk menampilkan informasi kelompok, identitas mata kuliah, daftar anggota, serta informasi website melalui beberapa endpoint atau route.

Teknologi yang Digunakan

- Node.js
- Express.js
- JavaScript
- HTML
- CSS

Identitas Kelompok

- Nama Kelompok: Kelompok 1
- Kelas: TI25G
- Program Studi: Teknik Informatika
- Universitas: Universitas Nusa Putra

Daftar Anggota Kelompok

No.| Nama| NIM
1| Abu Nur Al-Faruq| 20220040223
2| Abdul Wahab Rohmatullah| 20250040181
3| Adam Rifaldi| 20250040134
4| Adinda Anggraena Saputri| 20250040014

Identitas Mata Kuliah

- Mata Kuliah: Pemrograman Berbasis Platform Web
- Dosen Pengampu: Shintya Ayuningtias, M.Kom
- Materi: Node.js dan Express.js
- Semester: 3

Daftar Endpoint

No.| Endpoint| Keterangan
1| "/beranda"| Halaman sambutan
2| "/identitas"| Identitas kelompok
3| "/matkul"| Identitas mata kuliah
4| "/anggota"| Daftar anggota kelompok
5| "/tentang"| Informasi tentang website
6| "/api/kelompok"| Menampilkan data kelompok dalam format JSON

Struktur Folder

webserver-kelompok/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

Cara Menjalankan Project

1. Pastikan Node.js sudah terinstal.
2. Clone repository:

git clone https://github.com/AlfaruqTi22E/webserver-kelompok.git

3. Masuk ke folder project:

cd webserver-kelompok

4. Install dependencies:

npm install

5. Jalankan server:

npm start

6. Buka browser:

http://localhost:3000

Halaman utama akan diarahkan ke "/beranda".

Pengujian

Pengujian dilakukan dengan mengakses setiap endpoint melalui browser untuk memastikan seluruh halaman dapat ditampilkan dengan baik. Endpoint API juga diuji untuk memastikan data kelompok dapat ditampilkan dalam format JSON.

Repository GitHub

https://github.com/AlfaruqTi22E/webserver-kelompok

---

Tugas Mata Kuliah Pemrograman Berbasis Platform Web

Universitas Nusa Putra Sukabumi
