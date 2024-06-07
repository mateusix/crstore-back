import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import orders from './ordersModels';
import products from './productsModels';

const ordersProducts = sequelize.define(
  'orders_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    priceProducts: {
      field: 'price_products',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

ordersProducts.belongsTo(orders, {
  as: 'orders',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'ordersId',
    allowNull: false,
    field: 'id_order',
  },
});

ordersProducts.belongsTo(products, {
  as: 'products',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'productsId',
    allowNull: false,
    field: 'id_product',
  },
});

export default ordersProducts;
