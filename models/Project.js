import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Project = sequelize.define('Project', {
  project_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  project_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'projects',
  timestamps: true
});

export default Project;
