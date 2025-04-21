const { Event, EventCategory } = require("../../models");

exports.getAllEvents = async (req, res) => {
  const events = await Event.findAll({
    include: [
      {
        model: EventCategory,
        as: "category",
      },
    ],
  });
  res.json(events);
};
