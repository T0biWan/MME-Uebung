-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 15. Jan 2016 um 17:33
-- Server-Version: 10.1.9-MariaDB
-- PHP-Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `multimedia-engineering 1`
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
(3, 'Tongariro', 'Zentrale Hochebene', '23.01.2016', NULL, 'Amon Amarth'),
(4, 'Piha', 'Auckland', '15.03.1999', NULL, 'Surfen'),
(13, 'Nelson', 'Marlborough und Nelson', '', NULL, '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
