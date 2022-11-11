const router = require("express").Router();
const controller = require("../controller/todoController");

router
  .get("/", controller.getAllTodos)
  .get("/:id", controller.getTodo)
  .post("/", controller.createTodo)
  .put("/:id", controller.updateTask)
  .delete("/:id", controller.deleteTask);

module.exports = router;
