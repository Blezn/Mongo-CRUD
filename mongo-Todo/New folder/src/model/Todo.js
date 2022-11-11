const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    description: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const todoModel = model("todos", todoSchema);

module.exports = todoModel;
