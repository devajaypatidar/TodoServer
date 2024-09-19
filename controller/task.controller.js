const { Task } = require("../models");

exports.getAllTasks = async (req, res) => {
  console.log("geting task");
  try {
    const tasks = await Task.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { task } = req.body;
    const newTask = await Task.create({ task });
    res.status(201).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create task" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, status } = req.body;
    await Task.update({ task, status }, { where: { id } });
    res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
