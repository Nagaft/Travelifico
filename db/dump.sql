CREATE DATABASE  IF NOT EXISTS `travelifico_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `travelifico_db`;
-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: travelifico_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=150801 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (150800,'CDMX');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dates`
--

DROP TABLE IF EXISTS `dates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dates`
--

LOCK TABLES `dates` WRITE;
/*!40000 ALTER TABLE `dates` DISABLE KEYS */;
/*!40000 ALTER TABLE `dates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_types`
--

DROP TABLE IF EXISTS `food_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_types`
--

LOCK TABLES `food_types` WRITE;
/*!40000 ALTER TABLE `food_types` DISABLE KEYS */;
INSERT INTO `food_types` VALUES (1,'Italian'),(2,'Mediterranean'),(3,'Contemporary'),(4,'Tuscan'),(5,'Mexican'),(6,'Seafood'),(7,'Grill'),(8,'Northern-Italian'),(9,'Southern-Italian'),(10,'Spanish'),(11,'Pub'),(12,'Fusion'),(13,'Gastropub'),(14,'Latin'),(15,'Healthy'),(16,'Barbecue'),(17,'Asian'),(18,'Thai'),(19,'Korean'),(20,'Japanese'),(21,'International'),(22,'Sushi'),(23,'Japanese Fusion'),(24,'Bar'),(25,'Greek'),(26,'Argentinean'),(27,'Steakhouse'),(28,'French'),(29,'European'),(30,'Romana'),(31,'Lazio'),(32,'Sicilian'),(33,'Central-Italian'),(34,'Wine Bar');
/*!40000 ALTER TABLE `food_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `restaurant_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `reservation_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurant_id` (`restaurant_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`),
  CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `city_id` int DEFAULT NULL,
  `date_id` int DEFAULT NULL,
  `food_types` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  KEY `date_id` (`date_id`),
  CONSTRAINT `restaurants_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  CONSTRAINT `restaurants_ibfk_2` FOREIGN KEY (`date_id`) REFERENCES `dates` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Colmillo Masaryk',150800,NULL,'Bar,Grill,Pub,Wine Bar'),(2,'Parole Polanco',150800,NULL,'Italian,Mediterranean,Contemporary,Tuscan'),(3,'Balta',150800,NULL,'Mexican,Seafood,Mediterranean,Grill'),(4,'Zefiro',150800,NULL,'Mexican,Contemporary'),(5,'Auguri Kosher Trattoria',150800,NULL,'Italian,Mediterranean,Contemporary,Northern-Italian,Southern-Italian'),(6,'Animal Masaryk',150800,NULL,'Mexican,Spanish,Pub,Fusion,Gastropub'),(7,'Porfirios Toreo',150800,NULL,'Mexican,Latin,Healthy'),(8,'La Mansion Marriott Reforma Steakhouse',150800,NULL,'Mexican,Barbecue'),(9,'KYU MÉXICO',150800,NULL,'Asian,Thai,Korean,Fusion'),(10,'Ryoshi Masaryk',150800,NULL,'Japanese,International,Sushi,Asian,Healthy,Japanese Fusion'),(11,'Mochomos Palmas',150800,NULL,'Mexican'),(12,'Ilios Greek Estiatorio Polanco',150800,NULL,'Bar,Mediterranean,Greek,Pub'),(13,'Karpos Polanco ',150800,NULL,'Italian,Mediterranean,Greek'),(14,'Cambalache Plaza Oasis',150800,NULL,'Bar,International,Grill,Contemporary,Pub,Argentinean'),(15,'La Vicenta Toreo',150800,NULL,'Mexican,Steakhouse,Latin,Bar,Barbecue,Grill'),(16,'Condimento Restaurant',150800,NULL,'International'),(17,'Cityzen Rooftop Kitchen',150800,NULL,'Mexican,Fusion'),(18,'Restaurante Condimento Emporio Reforma',150800,NULL,'Mexican'),(19,'La Rural Argentina',150800,NULL,'Bar,International,Grill,Contemporary,Pub,Argentinean'),(20,'Los Danzantes Coyoacán',150800,NULL,'Mexican,Contemporary'),(21,'Asaderos Grill Plaza Carso',150800,NULL,'Mexican,International,Grill'),(22,'Taboo Polanco',150800,NULL,'Seafood,International,Mediterranean,Contemporary'),(23,'La Distral',150800,NULL,'Mexican,Latin,International'),(24,'Les Moustaches',150800,NULL,'French,Bar,International,Pub,Healthy'),(25,'Hotaru Mitikah',150800,NULL,'Japanese'),(26,'Cuerno Masaryk',150800,NULL,'Mexican'),(27,'Porfirios Coyoacán',150800,NULL,'Mexican'),(28,'Quattro',150800,NULL,'Italian,Mediterranean,European,Healthy,Tuscan,Romana,Lazio,Sicilian,Central-Italian,Southern-Italian'),(29,'Hotaru Arcos',150800,NULL,'Japanese'),(30,'Corazon De Maguey',150800,NULL,'Mexican'),(31,'Colmillo Masaryk',150800,NULL,'Bar,Grill,Pub,Wine Bar');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('_tzVmJPsuCQJOhVFF3EWcIFVHScyTbYn','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('2ESiKsz6ta-VGZIApDfIFjlXRKmQxLE4','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('2TmBdyreRYc4Rofv4eFDHkq95CogBNOA','2023-09-23 00:43:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:20','2023-09-22 00:43:20'),('2tQux5yQ9WMsAzimDhsq1Uwt_u2zd3UQ','2023-09-22 23:23:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-21 23:23:45','2023-09-21 23:23:45'),('3Bv7oJenfr1DgOI4XuQwrATesGxr_qVm','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('3DXUwrimrmaH58IScsZ7FGHVlSLMkCva','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('3TzJhyenygUbD8kn95jtdk-mautU1PQM','2023-09-23 00:43:33','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:33','2023-09-22 00:43:33'),('5AzeljE3HyorijJxx4g-KJHDr_aJls3X','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('87JvzbdfxsSSztCYiLdfJXrQ3wCNGznv','2023-09-22 23:23:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-21 23:23:45','2023-09-21 23:23:45'),('8TaGqzhRQxL8iomkYefjxNnB5XC2yIFR','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('AVjAsfbEN7ioJEKWU9cuGRW9dbz9ObWf','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('BilbO3FHEuGw0tzhpElAn5h8ALnusD4R','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('C_ezGV7QwDEpFGn5pFwEnQjWLNyrp9_t','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('d18dqeC6-ag_c6d9CSHfjfvMjrR-SZCa','2023-09-23 00:43:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:20','2023-09-22 00:43:20'),('D8SpGu69T_MWdTGehoB_d7i2DaOvAxg5','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('DpL-qXp-jawi1lCdie70mmkUCb5Sk9fC','2023-09-23 00:43:33','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:34','2023-09-22 00:43:34'),('gb9jsaCwls6uC_MbkBHwkzet5FJ3Bn7i','2023-09-22 23:23:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-21 23:23:45','2023-09-21 23:23:45'),('hU5Qneic6Jil6nrPTEgbHcVX_bgoKeTw','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('jHUSegjDwWW2ibhGVmFkQu2ZYsTceYdg','2023-09-23 00:43:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:19','2023-09-22 00:43:19'),('KcQfvM-Wh9Ilbgpw9FXC5auNE2JaPZRl','2023-09-23 00:43:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:17','2023-09-22 00:43:17'),('KKWNbzlz6QkBRdvTQ-iH9pzqKlg97EuV','2023-09-23 00:43:33','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:33','2023-09-22 00:43:33'),('lozm7Ru9FvraS8QtvE7JRh8UfftvTwCc','2023-09-23 00:43:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:19','2023-09-22 00:43:19'),('ndei3dotUl90sQla-7l53-0bmhkKZaIO','2023-09-22 23:48:14','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":1,\"logged_in\":true}','2023-09-21 23:14:53','2023-09-21 23:48:14'),('oVTLfJ23yKPIfUO4K1FE97jXxpuYI4VW','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('PdGtMB3f8h0yPiSsjlrxDkH_lRPesMuL','2023-09-23 00:43:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:17','2023-09-22 00:43:17'),('RS9AvytveLVJHpUY-K4ZH41b9lv_mc3O','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('rSjNiI7H18DY9OVuXcvgQMGWc2-NpHLP','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('sIoupIPNUn9DAP-ze6jz-m0LEMVyAQPi','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('tjNskwa3aYs1FkTJESiXBU8n62K1Lctu','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('UhtuoTUQ7Jcq7fGFBGdYt0AQBoKpVNWr','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('vAjYGlTn75EcbDD9s8gSnPmhfF2kis4v','2023-09-23 00:43:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:19','2023-09-22 00:43:19'),('XCDnGw2FB5YF8bRwKju1mzMpaXYUy7ge','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('YBgcjDxRQcBfpnXEIDzo6H88tlNdK2fx','2023-09-23 00:43:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:20','2023-09-22 00:43:20'),('YFYvab2wCQU1aYUeWaB7lBfwprFjzN2r','2023-09-23 00:43:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:17','2023-09-22 00:43:17'),('YuuEfkxv3qJS3e15KGsr-eVTYDAt_JHq','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21'),('ZEJqwKOaFrIrODlN_sUX6lsCF3Es-A7T','2023-09-23 00:43:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-22 00:43:21','2023-09-22 00:43:21');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'omar@example.com','$2b$10$mqoLxfWhu.CHbQXbVf9vi.R0k9QAHpmzbBbG6d3J04gC1cEme0AEy','1234567890');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'travelifico_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-21 19:11:12
