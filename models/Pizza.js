const { Schema, model } = require("mongoose");

const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    defaut: "Large",
  },
  toppings: [], // the []'s could be replaced by the word "Array"
});

const Pizza = model("Pizza", PizzaSchema);

module.exports = Pizza;
