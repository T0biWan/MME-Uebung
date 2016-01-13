-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 13. Jan 2016 um 20:09
-- Server-Version: 10.1.9-MariaDB
-- PHP-Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `mme`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `route`
--

CREATE TABLE `route` (
  `id` int(11) NOT NULL,
  `etappe` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  `datum` varchar(10) DEFAULT NULL,
  `poi` varchar(50) DEFAULT NULL,
  `kommentar` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `route`
--

INSERT INTO `route` (`id`, `etappe`, `region`, `datum`, `poi`, `kommentar`) VALUES
(1, 'Auckland', 'Auckland', '31.08.2012', NULL, 'Bungee-Jumping'),
(2, 'Karekare', 'Auckland', '14.01.2016', NULL, 'Wandern'),
(3, 'Tongariro', 'Zentrale Hochebene', '23.01.2016', NULL, 'Amon Amarth'),
(4, 'Piha', 'Auckland', '', NULL, 'Surfen');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `route`
--
ALTER TABLE `route`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `route`
--
ALTER TABLE `route`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
