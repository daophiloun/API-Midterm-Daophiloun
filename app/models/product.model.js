const sql = require("./db.js");

// Constructor
const Product = function(product) {
  this.pro_name = product.pro_name;
  this.price = product.price;
  this.cat_id = product.cat_id;
};

// Fetch all data
Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Products: ", res);
    result(null, res);
  });
};
Product.create = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (error, response) => {
    if (error) {
      console.error(error);
      result(error, null);
      return;
    }
    result(null, { id: response.insertId, ...newProduct });
  });
};

// ✅ Create many (เพิ่มข้อมูลหลายคน / หลายรายการ)
Product.createMany = (productsArray, result) => {
  // เตรียมข้อมูลให้เป็น array ของ array
  const values = productsArray.map(p => [
    p.product_name,
    p.price,
    p.category_id
  ]);

  sql.query(
    "INSERT INTO products (product_name, price, category_id) VALUES ?",
    [values],
    (error, response) => {
      if (error) {
        console.error(error);
        result(error, null);
        return;
      }
      result(null, response);
    }
  );
};

// Update by id
Product.updateById = (id, updatedProduct, result) => {
  sql.query(
    "UPDATE products SET ? WHERE id = ?",
    [updatedProduct, id],
    (error, response) => {
      if (error) {
        console.error(error);
        result(error, null);
        return;
      }

      if (response.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...updatedProduct });
    }
  );
};

// Remove one
Product.remove = (id, result) => {
  sql.query("DELETE FROM products WHERE id = ?", id, (error, response) => {
    if (error) {
      console.error(error);
      result(error, null);
      return;
    }

    if (response.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, response);
  });
};
module.exports = Product;