import React from 'react'

const About = () => {
  return (
    <div>
         <section id="home" className="breadcrumb-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12">
                            {/* Content */}
                            <div className="content d-flex flex-column justify-content-between">
                                <div className="heading w-60">
                                    <h1 className="title">Building <img src="assets/img/content/photographer.jpg" alt="" /></h1>
                                    <div className="flex ms-auto">
                                        <span className="line animate-line my-3 my-md-0"></span>
                                        <h1 className="title">scalable solutions.</h1>
                                    </div>
                                </div>
                                <p className="sub-title w-50 mt-4 ms-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Full Stack MERN Developer with expertise in data analytics, business intelligence, and modern web technologies. I create robust applications that drive business growth and deliver exceptional user experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <div className="content-round">
                <div className="rounded-div-wrapper">
                    <div className="rounded-div">
                        <div className="rounded-div-background"></div>
                    </div>
                </div>
            </div>

            <section className="experiences sticky primary-bg">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-3">
                            {/* Intro */}
                            <div className="intro">
                                <h3 className="title">Professional Experience</h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="row items">
                                {/* Current Position - Highlighted */}
                                <div className="col-12 col-md-6 item">
                                    <div className="content position-relative">
                                        <span className="count">01.</span>
                                        <div className="d-flex align-items-center mb-2">
                                            <h4 className="title mt-0 mb-0 me-2">Excerpt Technologies Pvt Ltd</h4>
                                            <span className="badge small bg-success text-white">Current</span>
                                        </div>
                                        <h6 className="position my-3">Full Stack Developer (MERN)</h6>
                                        <span className="badge small">Feb 2025 – Present</span>
                                        <p>Currently developing scalable web applications using MongoDB, Express.js, React.js, and Node.js. Implementing RESTful APIs, JWT authentication, and optimizing database schemas for enterprise-level solutions. Leading frontend development initiatives and collaborating with cross-functional teams.</p>
                                    </div>
                                </div>
                                
                                {/* Pentagon Space Internship */}
                                <div className="col-12 col-md-6 item">
                                    <div className="content">
                                        <span className="count">02.</span>
                                        <h4 className="title mt-0 mb-3">Pentagon Space</h4>
                                        <h6 className="position my-3">Full Stack Development Intern</h6>
                                        <span className="badge small">Sep 2024 – Feb 2025</span>
                                        <p>Completed 6-month internship focusing on MERN stack development and modern web technologies. Contributed to multiple client projects, gained hands-on experience with React.js, Node.js, and database optimization. Developed responsive web applications and improved code efficiency by 25%.</p>
                                    </div>
                                </div>
                                
                                {/* Cranes Varsity */}
                                <div className="col-12 col-md-6 item">
                                    <div className="content">
                                        <span className="count">03.</span>
                                        <h4 className="title mt-0 mb-3">Cranes Varsity Private Limited</h4>
                                        <h6 className="position my-3">Data Analyst Intern</h6>
                                        <span className="badge small">Oct 2023 – Dec 2023</span>
                                        <p>Achieved 15% increase in data accuracy through process optimization. Automated weekly reports reducing generation time by 30%. Utilized Python, SQL, Excel, and Power BI for comprehensive data analysis and business intelligence reporting.</p>
                                    </div>
                                </div>
                                
                                {/* Freelance Work */}
                                <div className="col-12 col-md-6 item">
                                    <div className="content">
                                        <span className="count">04.</span>
                                        <h4 className="title mt-0 mb-3">Freelance Development</h4>
                                        <h6 className="position my-3">Full Stack Developer & Data Analyst</h6>
                                        <span className="badge small">2023 – Present</span>
                                        <p>Delivering custom web applications and data analytics solutions for diverse clients. Specialized in MERN stack development, e-commerce platforms, Power BI dashboards, and business intelligence systems. Successfully completed 10+ projects with 100% client satisfaction rate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Skills Section */}
            <section className="skills primary-bg">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-3">
                            <div className="intro">
                                <h3 className="title">Technical Expertise</h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="row items">
                                {/* MERN Stack */}
                                <div className="col-12 col-md-6 item mb-4">
                                    <div className="content">
                                        <h5 className="skill-category">MERN Stack Development</h5>
                                        <div className="skill-tags mt-2">
                                            <span className="badge outlined me-2 mb-2">MongoDB</span>
                                            <span className="badge outlined me-2 mb-2">Express.js</span>
                                            <span className="badge outlined me-2 mb-2">React.js</span>
                                            <span className="badge outlined me-2 mb-2">Node.js</span>
                                            <span className="badge outlined me-2 mb-2">RESTful APIs</span>
                                            <span className="badge outlined me-2 mb-2">JWT Authentication</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Data Analytics */}
                                <div className="col-12 col-md-6 item mb-4">
                                    <div className="content">
                                        <h5 className="skill-category">Data Analytics & BI</h5>
                                        <div className="skill-tags mt-2">
                                            <span className="badge outlined me-2 mb-2">Power BI</span>
                                            <span className="badge outlined me-2 mb-2">Python</span>
                                            <span className="badge outlined me-2 mb-2">SQL</span>
                                            <span className="badge outlined me-2 mb-2">Excel Advanced</span>
                                            <span className="badge outlined me-2 mb-2">Data Visualization</span>
                                            <span className="badge outlined me-2 mb-2">Statistical Analysis</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Frontend Technologies */}
                                <div className="col-12 col-md-6 item mb-4">
                                    <div className="content">
                                        <h5 className="skill-category">Frontend Technologies</h5>
                                        <div className="skill-tags mt-2">
                                            <span className="badge outlined me-2 mb-2">HTML5</span>
                                            <span className="badge outlined me-2 mb-2">CSS3</span>
                                            <span className="badge outlined me-2 mb-2">JavaScript ES6+</span>
                                            <span className="badge outlined me-2 mb-2">Tailwind CSS</span>
                                            <span className="badge outlined me-2 mb-2">Material-UI</span>
                                            <span className="badge outlined me-2 mb-2">Responsive Design</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Backend & Deployment */}
                                <div className="col-12 col-md-6 item mb-4">
                                    <div className="content">
                                        <h5 className="skill-category">Backend & Deployment</h5>
                                        <div className="skill-tags mt-2">
                                            <span className="badge outlined me-2 mb-2">ASP.NET</span>
                                            <span className="badge outlined me-2 mb-2">MySQL</span>
                                            <span className="badge outlined me-2 mb-2">Git Version Control</span>
                                            <span className="badge outlined me-2 mb-2">Postman</span>
                                            <span className="badge outlined me-2 mb-2">Thunder Client</span>
                                            <span className="badge outlined me-2 mb-2">Cloud Deployment</span>
                                        </div>
                                    </div>
                                </div>
                                {/* AI & Machine Learning */}
                                <div className="col-12 col-md-6 item mb-4">
                                    <div className="content">
                                        <h5 className="skill-category">AI & Machine Learning</h5>
                                        <div className="skill-tags mt-2">
                                            <span className="badge outlined me-2 mb-2">CNN</span>
                                            <span className="badge outlined me-2 mb-2">TensorFlow</span>
                                            <span className="badge outlined me-2 mb-2">Flask</span>
                                            <span className="badge outlined me-2 mb-2">Google AI APIs</span>
                                            <span className="badge outlined me-2 mb-2">Image Processing</span>
                                            <span className="badge outlined me-2 mb-2">Deep Learning</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Additional Skills */}
                                <div className="col-12 col-md-6 item mb-4">
                                    <div className="content">
                                        <h5 className="skill-category">Additional Expertise</h5>
                                        <div className="skill-tags mt-2">
                                            <span className="badge outlined me-2 mb-2">OAuth Integration</span>
                                            <span className="badge outlined me-2 mb-2">bcrypt Security</span>
                                            <span className="badge outlined me-2 mb-2">Middleware Development</span>
                                            <span className="badge outlined me-2 mb-2">Cross-browser Testing</span>
                                            <span className="badge outlined me-2 mb-2">API Integration</span>
                                            <span className="badge outlined me-2 mb-2">Agile Development</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animated-image-container primary-bg p-0">
                <img className="animated-image" src="assets/img/content/case-1.jpg" alt="" />
            </section>

             <section className="faq">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            {/* Intro */}
                            <div className="intro">
                                <h3 className="title">Frequently Asked Questions</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-12 col-md-10">
                            {/* Brilio Accordion */}
                            <div className="accordion accordion-flush" id="brilio-accordion">
                                {/* Accordion Item */}
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
										What development services do you offer?
										</button>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#brilio-accordion">
                                        <div className="accordion-body">I offer comprehensive MERN stack development, data analytics solutions, Power BI dashboards, ASP.NET applications, and AI-powered web solutions. I also provide <a href="#">freelance development services</a> for custom business requirements with expertise gained from my current role at Excerpt Technologies.</div>
                                    </div>
                                </div>

                                {/* Accordion Item */}
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
										Can you help with data analytics and business intelligence?
										</button>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#brilio-accordion">
                                        <div className="accordion-body">Absolutely! I specialize in Power BI dashboard creation, data visualization, SQL database optimization, and Python-based analytics. With experience from Cranes Varsity and ongoing projects, I can help transform your raw data into <a href="#">actionable business insights</a> with automated reporting systems.</div>
                                    </div>
                                </div>

                                {/* Accordion Item */}
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
										Do you work on both frontend and backend development?
										</button>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#brilio-accordion">
                                        <div className="accordion-body">Yes, I'm a full stack developer currently working with MERN stack at Excerpt Technologies. I'm proficient in React.js, Node.js, Express.js, and MongoDB. I also have experience with <a href="#">ASP.NET deployments</a> and can handle complete end-to-end application development including authentication systems and API integration.</div>
                                    </div>
                                </div>

                                {/* Accordion Item */}
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
										What is your project timeline and pricing?
										</button>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#brilio-accordion">
                                        <div className="accordion-body">Project timelines vary based on complexity - simple web apps (2-4 weeks), complex MERN applications (6-12 weeks), data analytics dashboards (1-3 weeks). With my professional experience at Pentagon Space and current role at Excerpt Technologies, I provide detailed project estimates after initial consultation with transparent pricing structure.</div>
                                    </div>
                                </div>

                                {/* Accordion Item */}
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
										Are you available for freelance and remote work?
										</button>
                                    </h4>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#brilio-accordion">
                                        <div className="accordion-body">Yes, I'm available for freelance projects alongside my current full-time role. I have extensive experience in remote collaborations and have successfully completed 10+ freelance projects. I use modern collaboration tools for seamless project delivery and can accommodate different time zones.</div>
                                    </div>
                                </div>

                                {/* Accordion Item */}
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
										Can you integrate AI features into web applications?
										</button>
                                    </h4>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#brilio-accordion">
                                        <div className="accordion-body">Definitely! I have experience integrating Google AI APIs, building chatbot applications, and implementing machine learning features using CNN and deep learning models. I can add intelligent features to enhance user experience in your applications, combining my AI knowledge with full stack development expertise.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta border-top border-light-subtle">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            <h2 className="title mb-0 mb-md-2">Ready to Build Something</h2>
                            <div className="cta-text">
                                <span className="line-item">Amazing Together?</span>
                                <span className="line"></span>
                                <a className="btn magnetic-button" href="/contact">Let's Discuss Your Project! <i className="icon bi bi-arrow-right ms-1"></i><span></span></a>
                            </div>

                            {/* Socials */}
                            <div className="socials mt-5">
                                <nav className="nav justify-content-center">
                                    <a className="nav-link swap-icon" href="https://linkedin.com/in/yashvanth" target="_blank" rel="noopener noreferrer">LinkedIn <i className="icon rotate bi bi-arrow-right-short"></i></a>
                                    <a className="nav-link swap-icon" href="https://github.com/yashvanth" target="_blank" rel="noopener noreferrer">GitHub <i className="icon rotate bi bi-arrow-right-short"></i></a>
                                    <a className="nav-link swap-icon" href="mailto:yashwanthsk20@gmail.com">Email <i className="icon rotate bi bi-arrow-right-short"></i></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About