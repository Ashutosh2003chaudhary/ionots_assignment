// server/server.js
const express = require('express');
const Datastore = require('nedb');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));


app.use(express.json());

// Initialize NeDB databases
const projectsDB = new Datastore({ filename: './data/projects.db', autoload: true });
const assignmentsDB = new Datastore({ filename: './data/assignments.db', autoload: true });

// Add sample projects if database is empty
projectsDB.count({}, function (err, count) {
  if (count === 0) {
    const sampleProjects = [
      {
        title: "Machine Learning Basics",
        description: "Build a simple classification model using scikit-learn",
        difficulty: "Beginner",
        deadline: new Date("2024-12-31"),
        status: "Available"
      },
      {
        title: "Data Visualization Project",
        description: "Create interactive dashboards using Python and Plotly",
        difficulty: "Intermediate",
        deadline: new Date("2024-12-31"),
        status: "Available"
      }
    ];
    
    projectsDB.insert(sampleProjects, function(err) {
      if (err) console.error("Error inserting sample data:", err);
      else console.log("Sample projects added to database");
    });
  }
});

// Routes
app.use('/api/projects', require('./routes/projects')(projectsDB));
app.use('/api/assignments', require('./routes/assignments')(assignmentsDB));

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
