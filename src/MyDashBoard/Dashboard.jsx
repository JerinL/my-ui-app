import React from "react";
import './Dashboard.css';

const Dashboard  = () => {
    console.log("Dashboard is being rendered");
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Your Name</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="dashboard-content">
                <section id="about">
                    <h2>About Me</h2>
                    <p>Brief introduction about yourself and your skills.</p>
                </section>
                <section id="projects">
                    <h2>My Projects</h2>
                    <div className="projects-list">
                        <div className="project-card">
                            <h3>Project 1</h3>
                            <p>Short description of the project.</p>
                        </div>
                        <div className="project-card">
                            <h3>Project 2</h3>
                            <p>Short description of the project.</p>
                        </div>
                        {/* Add more project cards as needed */}
                    </div>
                </section>
                <section id="contact">
                    <h2>Contact Me</h2>
                    <p>Email: your.email@example.com</p>
                </section>
            </main>
            <footer className="dashboard-footer">
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
