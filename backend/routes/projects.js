// routes/projects.js
module.exports = (db) => {
  const router = require('express').Router();

  // Get all projects
  router.get('/', (req, res) => {
    db.find({}, (err, projects) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }
      res.json(projects);
    });
  });

  // Create new project
  router.post('/', (req, res) => {
    const project = {
      title: req.body.title,
      description: req.body.description,
      difficulty: req.body.difficulty,
      deadline: req.body.deadline,
      status: 'Available',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    db.insert(project, (err, newProject) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res.status(201).json(newProject);
    });
  });

  return router;
};
