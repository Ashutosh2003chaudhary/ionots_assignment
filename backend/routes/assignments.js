// routes/assignments.js
module.exports = (db) => {
  const router = require('express').Router();

  // Get assignment by ID
  router.get('/:id', (req, res) => {
    db.findOne({ _id: req.params.id }, (err, assignment) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }
      if (!assignment) {
        res.status(404).json({ message: 'Assignment not found' });
        return;
      }
      res.json(assignment);
    });
  });

  // Create new assignment
  router.post('/', (req, res) => {
    const assignment = {
      project: req.body.projectId,
      candidate: req.body.candidateId,
      status: 'Pending',
      score: 0,
      progress: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    db.insert(assignment, (err, newAssignment) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res.status(201).json(newAssignment);
    });
  });

  // Update assignment progress
  router.patch('/:id/progress', (req, res) => {
    db.update(
      { _id: req.params.id },
      { $set: { progress: req.body.progress, updatedAt: new Date() } },
      { returnUpdatedDocs: true },
      (err, numAffected, updatedAssignment) => {
        if (err) {
          res.status(400).json({ message: err.message });
          return;
        }
        if (numAffected === 0) {
          res.status(404).json({ message: 'Assignment not found' });
          return;
        }
        res.json(updatedAssignment);
      }
    );
  });

  return router;
};
