import React from "react";
import '../styles/App.css';

// Sample project data
const projects = [
  { name: "Project1", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
  { name: "Project2", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
  { name: "Project3", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
  { name: "Project4", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
  { name: "Project5", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
  { name: "Project6", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." }
];

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <p data-ns-test="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
