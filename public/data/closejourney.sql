-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 18 Okt 2024 pada 06.03
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `closejourney`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_words`
--

CREATE TABLE `data_words` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `word` varchar(255) NOT NULL,
  `sentence` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL DEFAULT 'noun',
  `like` int(11) NOT NULL DEFAULT 0,
  `bookmark` int(11) NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `data_words`
--

INSERT INTO `data_words` (`id`, `word`, `sentence`, `category`, `like`, `bookmark`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Apple', 'I ate an apple for lunch.', 'adverb', 0, 0, 1, '2024-10-17 20:34:48', '2024-10-17 20:34:48'),
(2, 'Car', 'She drives a red car.', 'noun', 0, 0, 1, '2024-10-17 20:35:10', '2024-10-17 20:35:10'),
(3, 'Dog', 'The dog barked at the stranger.', 'noun', 0, 0, 1, '2024-10-17 20:35:28', '2024-10-17 20:35:28'),
(4, 'Book', 'I borrowed a book from the library.', 'noun', 0, 0, 1, '2024-10-17 20:35:46', '2024-10-17 20:35:46'),
(5, 'House', 'They live in a big house.', 'noun', 0, 0, 1, '2024-10-17 20:36:03', '2024-10-17 20:36:03'),
(6, 'City', 'New York is a bustling city.', 'noun', 0, 0, 1, '2024-10-17 20:36:18', '2024-10-17 20:36:18'),
(7, 'Ocean', 'The ocean is calm today.', 'noun', 0, 0, 1, '2024-10-17 20:36:37', '2024-10-17 20:36:37'),
(8, 'Friend', 'He is my best friend.', 'noun', 0, 0, 1, '2024-10-17 20:36:53', '2024-10-17 20:36:53'),
(9, 'Flower', 'She picked a flower from the garden.', 'noun', 0, 0, 1, '2024-10-17 20:37:10', '2024-10-17 20:37:10'),
(11, 'Quickly', 'She ran quickly to catch the bus.', 'adverb', 0, 0, 1, '2024-10-17 20:38:34', '2024-10-17 20:38:34'),
(12, 'Carefully', 'He carefully placed the vase on the shelf.', 'adverb', 0, 0, 1, '2024-10-17 20:38:50', '2024-10-17 20:38:50'),
(13, 'Happily', 'They danced happily at the party.', 'adverb', 0, 0, 1, '2024-10-17 20:39:05', '2024-10-17 20:39:05'),
(14, 'Silently', 'The cat moved silently through the grass.', 'adverb', 0, 0, 1, '2024-10-17 20:39:22', '2024-10-17 20:39:22'),
(15, 'Eagerly', 'She eagerly awaited the results of the exam.', 'adverb', 0, 0, 1, '2024-10-17 20:39:37', '2024-10-17 20:39:37'),
(16, 'Beautiful', 'The sunset is beautiful.', 'adjective', 0, 0, 1, '2024-10-17 20:40:03', '2024-10-17 20:40:03'),
(17, 'Tall', 'He is taller than his brother.', 'adjective', 0, 0, 1, '2024-10-17 20:40:17', '2024-10-17 20:40:17'),
(18, 'Run', 'She loves to run in the park.', 'verbs', 0, 0, 1, '2024-10-17 20:40:43', '2024-10-17 20:40:43'),
(19, 'Write', 'He writes in his journal every night.', 'verbs', 0, 0, 1, '2024-10-17 20:40:57', '2024-10-17 20:40:57'),
(20, 'Eat', 'They eat dinner at 7 PM.', 'verbs', 0, 0, 1, '2024-10-17 20:41:11', '2024-10-17 20:41:11'),
(21, 'Speak', 'She can speak three languages fluently.', 'verbs', 0, 0, 1, '2024-10-17 20:41:24', '2024-10-17 20:41:24'),
(22, 'Play', 'The children play soccer after school.', 'verbs', 0, 0, 1, '2024-10-17 20:41:38', '2024-10-17 20:41:38');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '2024_10_17_001204_create_data_words_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('a89GgVIxE4Yczws2AVsfRYBYH1CfR4QUVaClBk7E', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiaUFxaUpLQnNodmxEMzNubHFPWXI0bjc2NnJIZkZyZVg3VmQyR3l2UCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1729223361);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '/assets/avatars/boy_1.png',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'junx', 'junx@gmail.com', NULL, '$2y$12$DRUmBJ1sz78D8s8ruRDvq.Pf2MeieAViiHOh5UvR5TuuWHTy/2ooe', '/assets/avatars/boy_1.png', NULL, '2024-10-17 20:31:05', '2024-10-17 20:31:05');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `data_words`
--
ALTER TABLE `data_words`
  ADD PRIMARY KEY (`id`),
  ADD KEY `data_words_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_words`
--
ALTER TABLE `data_words`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `data_words`
--
ALTER TABLE `data_words`
  ADD CONSTRAINT `data_words_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
