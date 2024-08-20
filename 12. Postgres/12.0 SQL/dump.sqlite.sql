-- TABLE
CREATE TABLE customers(
	id INT NOT NULL,
  	first_name STRING,
  	last_name STRING,
  	address STRING,
  	PRIMARY KEY (id)
);
CREATE TABLE orders(
	id INT NOT NULL,
  	order_number INT,
  	customer_id INT,
  	product_id INT,
  	PRIMARY KEY (id),
  	FOREIGN KEY (customer_id) REFERENCES customers(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE products(
	id INT NOT NULL,
  	name STRING,
  	price MONEY, stock INT,
  	PRIMARY KEY (id)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
