# ParkTrack

ParkTrack adalah aplikasi berbasis desktop yang dirancang untuk mengelola data parkir kendaraan. Sistem ini memungkinkan pengguna untuk mencatat, melihat, dan mengatur kendaraan yang masuk dan keluar dari area parkir.

## Fitur Website
List fitur dari aplikasi ini adalah sebagai berikut: 
1.  Tampilan aplikasi terkait dengan parkir motor.
2.  Database MySQL untuk menyimpan dan mengelola data.
3.  Terdapat halaman login dengan dua hak akses yaitu admin dan user.
4.  Terdapat berbagai hak admin, yaitu:
	-	Admin dapat mengelola hak akses admin dan user.
	-	Admin dapat memasukkan nomor plat motor saat masuk parkir dan menentukan lokasi parkir.
3.  Hak akses user terbuat secara otomatis saat nomor plat motor dimasukkan oleh admin.
4.  Sistem menyediakan informasi lokasi parkir yang tersedia dan jumlah parkir yang tersedia.
5.  Admin dapat melihat data grafik jumlah motor yang parkir secara periodik.
5.  Fitur grafik (column chart) untuk visualisasi jumlah motor parkir.
6.  User dapat melihat lokasi motornya dan mengubah username dan password.
7.  Fitur pencarian untuk mencari informasi terkait nomor plat motor atau data lainnya.
8.  Fitur laporan untuk menghasilkan laporan berdasarkan data parkir motor.
9.  Fitur dark dan light mode.

## Struktur Folder

**ParkTrack**
-   **admin** (Tempat halaman utama admin dan laporan)
-   **api** (Tempat file yang menghandle logic AJAX)
-   **components** (Tempat folder dan file komponen HTML yang digunakan pada project)
	-   **admin**
	-   **konten-dialog**
-   **db** (Tempat file SQL dan koneksi database MySQL pada PHP)
	-   **sql**
-   **lib** (Tempat file yang menghandle form action dan query ke database)
	-   **action**
	-   **histori-parkiran**
	-   **motor**
	-   **parkiran**
	-   **user**
-   **public** (Tempat file yang bisa diakses publik seperti gambar dan file Javascript)
	-   **img**
	-   **js**

## Menjalankan Project Di Komputer Anda
Untuk menjalankan secara lokal, anda membutuhkan:
- XAMPP versi 8.x.x
- Text editor seperti VSCode, Sublime Text, Neovim, atau yang lain.
- Browser modern seperti Chrome, Edge, Firefox, atau yang lain. 

Kemudian jika sudah mendownload folder ini, anda harus meletakkannya di folder `htdocs` atau tempat lain anda meletakkan project PHP.

Selanjutnya anda bisa membuat database baru pada PHPMyAdmin, lalu melakukan import SQL yang terdapat pada folder `db/sql` dan pilih file SQL `parkiran-dua`.

Jika sudah anda bisa pergi ke http://localhost/parkiran-dua dan pada halaman login anda bisa masuk sebagai admin menggunakan:
> Username: admin dan Password: admin

Untuk masuk sebagai user menggunakan:
> Username: pindo dan Password: pindo
