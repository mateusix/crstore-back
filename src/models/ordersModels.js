import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import users from './usersModels';
import addresses from './adressesModels';
import payment from './paymentsModels';
import cupons from './cuponsModels';

const orders = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    totalDiscount: {
      field: 'total_discount',
      type: DataTypes.NUMBER,
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

orders.belongsTo(users, {
  as: 'usersDelivery',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'usersDeliveryId',
    allowNull: false,
    field: 'id_user_deliver',
  },
});

orders.belongsTo(users, {
  as: 'usersCustomer',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'usersCustomerId',
    allowNull: false,
    field: 'id_user_customer',
  },
});

orders.belongsTo(addresses, {
  as: 'adresses',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idAddress',
    allowNull: false,
    field: 'id_address',
  },
});

orders.belongsTo(payment, {
  as: 'payment',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'paymentId',
    allowNull: false,
    field: 'id_payment',
  },
});

orders.belongsTo(cupons, {
  as: 'cupons',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'cupomId',
    allowNull: true,
    field: 'id_cupom',
  },
});

export default orders;
