## CLOSE JOURNEY

Proyek ini dibuat mengingat betapa sulitnya belajar bahasa inggris, dimana harus dimulai dari mana?.
Oleh karena itu pengembang berinisiatif berdasarkan pengalaman pribadi pengembang mencoba merancang sebuah sistem dimana
dapat membantu proses belajar bahasa inggris tersebut. Pada sistem ini hanya menyimpan kosa kata yang diikuti oleh contoh penggunaan kosa kata tersebut dan bukan hanya itu sistem memberikan kemudahan untuk pengguna lain dapat menduplikasi kosa kata yang telah ditambahkan oleh pengguna lain, hal ini bertujuan supaya saling bertukar kosa kata sehingga pengguna mendapatkan proses belajar yang menyenangkan. Selain itu sistem ini memberikan feedback terkait kosa kata pengguna lain yaitu dengan memberikan suka terhadap kosa kata yang telah ditambahkan oleh pengguna lain dengan tujuan saling mendukung satu sama lain.
Meskipun keterbatasan akan fitur sistem ini diharapkan dapat membantu dalam mempelajari bahasa inggris serta menghemat kertas dan mudah diakses dimanapun selama terkoneksi dengan internet.

## Fitur pada sistem ini

-   Menambahkan kosa kata baru.
-   Menduplikasi kosa kata pengguna lain.
-   Memberikan dukungan kepada pengguna lain.
-   Mengubah kosa kata yang telah ditambahkan.
-   Menghapus kosa kata yang tidak dibutuhkan.

## Penggunaan Sistem

-   Silahkan mendaftarkan akun terlebih dahulu jika belum mempunyai akun.
-   Setelah mempunyai akun, silahkan login pada menu login yang tersedia.

## Teknologi yang digunakan

-   Menggunakan Framework [Laravel](https://laravel.com/).
-   Menggunakan [Tailwind](https://tailwindcss.com/).
-   Menggunakan [React/Inertia] (https://inertiajs.com/).
-   Menggunakan [Lodash](https://lodash.com/).

## Menjalankan di local

-   Pastikan perangkat sudah terinstal PHP yang mendukung Framework Laravel.
-   Clone repository ini ke dalam perangkat anda.
-   Setelah proses clone berhasil dan selesai lakukan composer install
-   Selanjutnya perhatikan .env untuk terkoneksi ke database. Adapun tampilan sebagai berikut
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=closejourney
    DB_USERNAME=root
    DB_PASSWORD=
-   Kemudain lakukan php artisan migrate untuk migrasi database atau data dapat diimport dari follder public/data/closejourney.sql
-   Setelah semua proses dilakukan selanjutnya jalankan dengan php artisan serve untuk menjalankan diperangkat anda
-   Untuk memodifikasi komponen terkait pengembangan dapat menghapus folder build pada folder public
-   Jalankan npm run dev untuk tahap pengembangan dan npm run build ketika pengembangan selesai.

## Preview

Dapat mengunjungi [Close Journey](https://junxwebdev.my.id/)

## Salam

Terima kasih telah meluangkan waktu untuk melihat proyek saya, terdapat banyak kekurangan pada pengembangan sistem ini
membuat saya ingin terus belajar dan mengembangakan sistem yang lebih baik lagi dan impian saya suatu saat saya dapat membuat sebuah karya dari ilmu yang saya pelajari dengan tujuan memberikan kontribusi pemberdayaan manusia, memberikan manfaat, serta dapat menjadi nilai ekonomis.

## Pengembang

-   Tri Saptono
