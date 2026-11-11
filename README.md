Web Server Kelompok 1

Project Tugas Mata Kuliah Pemrograman Berbasis Platform Web

Web Server Kelompok 1 adalah aplikasi web sederhana yang dikembangkan menggunakan Node.js dan Express.js. Aplikasi ini menampilkan informasi kelompok, identitas mata kuliah, daftar anggota, serta menyediakan endpoint API yang mengembalikan data kelompok dalam format JSON.

📌 Informasi Proyek

Keterangan| Informasi
Nama Kelompok| Kelompok 1
Kelas| TI25G
Program Studi| Teknik Informatika
Universitas| Universitas Nusa Putra
Mata Kuliah| Pemrograman Berbasis Platform Web
Dosen Pengampu| Shintya Ayuningtias, M.Kom
Materi| Node.js dan Express.js
Semester| 3

👥 Anggota Kelompok

No.| Nama| NIM
1| Abu Nur Al-Faruq| 20220040223
2| Abdul Wahab Rohmatullah| 20250040181
3| Adam Rifaldi| 20250040134
4| Adinda Anggraena Saputri| 20250040014

🛠️ Teknologi yang Digunakan

- Node.js sebagai runtime JavaScript untuk menjalankan server.
- Express.js sebagai framework untuk mengelola server dan routing.
- JavaScript sebagai bahasa pemrograman.
- HTML untuk menyusun struktur halaman.
- CSS untuk mengatur tampilan halaman web.
- npm untuk mengelola dependensi proyek.

🚀 Fitur dan Endpoint

Aplikasi menyediakan beberapa endpoint dengan metode GET:

Method| Endpoint| Fungsi
GET| "/"| Mengarahkan pengguna ke halaman beranda.
GET| "/beranda"| Menampilkan halaman sambutan.
GET| "/identitas"| Menampilkan identitas kelompok.
GET| "/matkul"| Menampilkan informasi mata kuliah.
GET| "/anggota"| Menampilkan daftar anggota kelompok.
GET| "/tentang"| Menampilkan informasi website.
GET| "/api/kelompok"| Menampilkan data kelompok dalam format JSON.

Aplikasi juga memiliki penanganan 404 Not Found untuk alamat atau endpoint yang tidak tersedia.

📂 Struktur Folder

webserver-kelompok/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md

💻 Cara Menjalankan Proyek

Pastikan Node.js dan npm sudah terpasang di komputer.

1. Clone repository

git clone https://github.com/AlfaruqTi22E/webserver-kelompok.git

2. Masuk ke direktori proyek

cd webserver-kelompok

3. Install dependencies

npm install

4. Jalankan server

npm start

5. Buka aplikasi di browser

http://localhost:3000

Jika server berhasil dijalankan, aplikasi dapat diakses melalui alamat tersebut.

🧪 Pengujian Endpoint

Setelah server aktif, setiap endpoint dapat diuji melalui browser menggunakan alamat berikut:

- http://localhost:3000/beranda
- http://localhost:3000/identitas
- http://localhost:3000/matkul
- http://localhost:3000/anggota
- http://localhost:3000/tentang
- http://localhost:3000/api/kelompok

Pengujian dilakukan untuk memastikan setiap halaman menampilkan informasi sesuai fungsinya dan endpoint API mengembalikan data kelompok dalam format JSON.

🔗 Repository

Source code dan dokumentasi proyek tersedia di GitHub:

"AlfaruqTi22E/webserver-kelompok" (https://github.com/AlfaruqTi22E/webserver-kelompok)

---

Universitas Nusa Putra
Program Studi Teknik Informatika
Mata Kuliah Pemrograman Berbasis Platform Web
