const sequelize = require("../configs/db");
const { DataTypes } = require("sequelize");

// Import models

const Event = require("./Event");
const EventCategory = require("./EventCategory")(sequelize, DataTypes);

// Set up associations
Event.belongsTo(EventCategory, {
  foreignKey: "category_id",
  as: "category",
});

EventCategory.hasMany(Event, {
  foreignKey: "category_id",
  as: "events",
});

module.exports = {
  Event,
  EventCategory,
};
