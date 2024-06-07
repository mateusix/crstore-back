import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import category from './categoriesModels';

const products = sequelize.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER(15, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

products.belongsTo(category, {
  as: 'category',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'categoryId',
    allowNull: false,
    field: 'id_category',
  },
});

export default products;
