CREATE TABLE Mercs
(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nickname NVARCHAR(50) NOT NULL,
	legalAge INT NOT NULL,
	idWeapon INT NULL DEFAULT 1,
	eddies INT NOT NULL DEFAULT 0,
	isAlive TINYINT NOT NULL DEFAULT 1
)
