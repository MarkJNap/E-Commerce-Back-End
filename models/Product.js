// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // first column is the id
    id: {
      type: DataTypes.INTEGER,
      allownull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // second column is the product name
    product_name: {
      type: DataTypes.STRING,
      allownull: false,
    },

    // third column is the price
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allownull: false,
      validate: {
        isDecimal: true,
      },
    },

    // fourth column is the stock
    stock: {
      type: DataTypes.INTEGER,
      allownull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },

    // fifth column is the category id
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
        unique: false,
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
