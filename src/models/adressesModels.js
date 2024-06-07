import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import users from './usersModels';

const addresses = sequelize.define(
  'addresses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    zipCode: {
      field: 'zip_code',
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    numberForget: {
      field: 'number_forget',
      type: DataTypes.STRING(255),
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

addresses.belongsTo(users, {
  as: 'users',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idUsers',
    allowNull: false,
    field: 'id_user',
  },
});

export default addresses;
