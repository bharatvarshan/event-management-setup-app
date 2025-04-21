const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const Event = sequelize.define(
  "Event",
  {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    event_date_time: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    location: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created_at: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updated_at: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  {
    tableName: "event",
    timestamps: false,
    modelName: "Event",
  }
);

module.exports = Event;
