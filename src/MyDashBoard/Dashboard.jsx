import React from "react";
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div class="profile-container">
                    <img src="path/to/your/profile.jpg" alt="Profile Picture" class="profile-picture" />
                    <span class="profile-name">Jerin L</span>
                </div>

                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#Skills"> Skils</a></li>
                    </ul>
                </nav>
            </header>
            <main className="dashboard-content">
                <section id="about">
                    <h2>About Me</h2>
                    <p>Dedicated Software Engineer with over 2+ years of experience in developing and maintaining web applications. Expertise
                        in Java, Spring Boot, and SQL, with a strong track record of delivering high-quality products on time. Demonstrated
                        ability to work both independently and collaboratively within a team. Seeking a challenging role to leverage my skills
                        and experience to make a significant impact</p>
                </section>
                <section id="projects">
                    <h2>My Projects</h2>
                    <div className="projects-list">
                        <div className="project-card">
                            <h3 >
                                <a href="https://laulamaschools.com/aboutus#teamMembers" target="blanck" rel="noopener noreferrer">LaulamaSchools</a>
                            </h3>
                            <p>Short description of the project.</p>
                        </div>
                        <div className="project-card">
                            <h3 >
                                <a href="https://startup2launch.com/" target="blanck" rel="noopener noreferrer"> Startup2Launch</a>
                            </h3>
                            <p>Short description of the project.</p>
                        </div>
                        <div className="project-card">
                            <h3>aryanow</h3>
                            <p>Short description of the project.</p>
                        </div>
                        {/* Add more project cards as needed */}
                    </div>
                </section>
                <section id="contact">
                    <h2>Contact Me</h2>
                    <p>
                        Email: <a href="mailto:Jerinjack111@gmail.com">jerinjack111@gmail.com</a>
                    </p>
                </section>
            </main>
            <footer className="dashboard-footer">
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
