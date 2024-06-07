import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const cupons = sequelize.define(
  'cupoms',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    value: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    uses: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 50,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default cupons;
