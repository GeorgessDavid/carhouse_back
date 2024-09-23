-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'brands'
-- 
-- ---

DROP TABLE IF EXISTS `Brand`;
		
CREATE TABLE `Brand` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(200) NOT NULL,
  `logo` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'models'
-- 
-- ---

DROP TABLE IF EXISTS `Model`;
		
CREATE TABLE `Model` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(200) NOT NULL,
  `img` VARCHAR(200) NOT NULL,
  `description` TEXT(500),
  `Brand_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Model` ADD FOREIGN KEY (Brand_id) REFERENCES `Brand` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Brand` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Model` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---
INSERT INTO `Brand` (`id`,`name`,`logo`) VALUES(1,'Audi','https://i.imgur.com/KWTSfPg.png');
INSERT INTO `Model` (`id`,`name`,`img`,`description`,`Brand_id`) VALUES(1,'A3', 'https://i.imgur.com/fXKW9qs.jpeg', 'El Audi A3 es un automóvil del segmento C producido por el fabricante alemán Audi desde 1996. Se trata de un hatchback de tres o cinco puertas y un sedán de cuatro puertas, que comparte plataforma y otros elementos mecánicos con el Volkswagen Golf, el SEAT León y el Škoda Octavia.', 1)
-- ('','','','','');