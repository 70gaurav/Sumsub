import { Sequelize } from 'sequelize';

const Connection = new Sequelize('customers', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default Connection;
