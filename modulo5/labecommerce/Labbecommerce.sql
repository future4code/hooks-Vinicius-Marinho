CREATE TABLE Labecommerce_users (
	id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE Labecommerce_products(
	id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE Labecommerce_purchases (
	id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) NOT NUll,
    quantity INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Labecommerce_users(id),
    FOREIGN KEY (product_id) REFERENCES Labecommerce_products(id)
);
    