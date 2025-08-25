import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Define all projects with their categories
  const projects = [
    {
      id: 1,
      title: "Terra Clenz E-commerce Platform",
      image: "assets/terra/home.png",
      categories: ["mern-stack", "e-commerce"],
      tags: ["MERN Stack", "E-commerce", "Payment Gateway", "Cart Management"],
      link: "https://terraclenz.com",
      colClass: "col-12 col-lg-8"
    },
    {
      id: 2,
      title: "City Hospitality Solutions",
      image: "assets/city/mhome.png",
      categories: ["mern-stack"],
      tags: ["Mobile Responsive", "React.js", "Node.js", "MongoDB"],
      link: "https://cityhospitalitysolutions.com",
      colClass: "col-12 col-lg-4"
    },
    {
      id: 3,
      title: "Athena AI Chatbot Application",
      image: "assets/img/mchat.png",
      categories: ["mern-stack", "ai-ml"],
      tags: ["React.js", "Google API", "JWT Auth", "AI Integration"],
      link: "#",
      colClass: "col-12 col-lg-4"
    },
    {
      id: 4,
      title: "Mech Mold Manufacturing Website",
      image: "assets/mechmold/machinary.png",
      categories: ["mern-stack"],
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: "https://mechmold.com",
      colClass: "col-12 col-lg-8"
    },
    {
      id: 5,
      title: "BDM Tech Solutions",
      image: "assets/bdm/mbdm1.png",
      categories: ["mern-stack"],
      tags: ["React.js", "Node.js", "Express.js"],
      link: "https://bdmtech.in",
      colClass: "col-12 col-lg-4"
    },
    {
      id: 6,
      title: "Smart Healthcare Image Forgery Detection",
      image: "assets/img/healthcare.png",
      categories: ["ai-ml"],
      tags: ["CNN", "TensorFlow", "Flask", "Deep Learning", "Image Processing"],
      link: "#",
      colClass: "col-12 col-lg-8"
    }
  ];

  // Filter projects based on active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => 
      project.categories.includes(activeFilter)
    );
  };

  // Get counts for each category
  const getCategoryCount = (category) => {
    if (category === 'all') {
      return projects.length;
    }
    return projects.filter(project => project.categories.includes(category)).length;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div>
      <section id="home" className="breadcrumb-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <div className="content w-60">
                <h1 className="title">MERN Stack solutions</h1>
                <div className="flex ms-auto">
                  <span className="line animate-line"></span>
                  <h1 className="title">that drive results</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="works explore-area portfolio-filter pt-0">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="btn-group filter-menu" role="group" aria-label="Basic radio toggle button group">
                <div className="input-item d-flex">
                  <div className="content">
                    <input 
                      type="radio" 
                      className="btn-check filter-btn" 
                      name="shuffle-filter" 
                      id="all" 
                      value="all" 
                      checked={activeFilter === 'all'}
                      onChange={(e) => setActiveFilter(e.target.value)}
                    />
                    <label className="btn" htmlFor="all">All Projects</label>
                  </div>
                  <span className="count">{getCategoryCount('all')}</span>
                </div>

                <div className="input-item d-flex">
                  <div className="content">
                    <input 
                      type="radio" 
                      className="btn-check filter-btn" 
                      name="shuffle-filter" 
                      id="mern-stack" 
                      value="mern-stack"
                      checked={activeFilter === 'mern-stack'}
                      onChange={(e) => setActiveFilter(e.target.value)}
                    />
                    <label className="btn" htmlFor="mern-stack">MERN Stack</label>
                  </div>
                  <span className="count">{getCategoryCount('mern-stack')}</span>
                </div>

                <div className="input-item d-flex">
                  <div className="content">
                    <input 
                      type="radio" 
                      className="btn-check filter-btn" 
                      name="shuffle-filter" 
                      id="e-commerce" 
                      value="e-commerce"
                      checked={activeFilter === 'e-commerce'}
                      onChange={(e) => setActiveFilter(e.target.value)}
                    />
                    <label className="btn" htmlFor="e-commerce">E-commerce</label>
                  </div>
                  <span className="count">{getCategoryCount('e-commerce')}</span>
                </div>

                <div className="input-item d-flex">
                  <div className="content">
                    <input 
                      type="radio" 
                      className="btn-check filter-btn" 
                      name="shuffle-filter" 
                      id="ai-ml" 
                      value="ai-ml"
                      checked={activeFilter === 'ai-ml'}
                      onChange={(e) => setActiveFilter(e.target.value)}
                    />
                    <label className="btn" htmlFor="ai-ml">AI/ML</label>
                  </div>
                  <span className="count">{getCategoryCount('ai-ml')}</span>
                </div>

                <div className="input-item d-flex">
                  <div className="content">
                    <input 
                      type="radio" 
                      className="btn-check filter-btn" 
                      name="shuffle-filter" 
                      id="data-analytics" 
                      value="data-analytics"
                      checked={activeFilter === 'data-analytics'}
                      onChange={(e) => setActiveFilter(e.target.value)}
                    />
                    <label className="btn" htmlFor="data-analytics">Data Analytics</label>
                  </div>
                  <span className="count">{getCategoryCount('data-analytics')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row filter-items items inner">
            {filteredProjects.map((project) => (
              <div key={project.id} className={`${project.colClass} item filter-item`}>
                <div className="card portfolio-item layout-2 scale has-shadow">
                  <div className="image-holder">
                    <a 
                      className="card-thumb" 
                      href={project.link} 
                      target={project.link !== "#" ? "_blank" : "_self"}
                      rel={project.link !== "#" ? "noopener noreferrer" : ""}
                      onClick={project.link === "#" ? (e) => e.preventDefault() : undefined}
                    >
                      <img src={project.image} alt={project.title} />
                    </a>
                  </div>
                  <div className="card-content p-2">
                    <div className="heading">
                      <h4 className="title mt-2 mt-md-3 mb-3">{project.title}</h4>
                      <div className="show-project">
                        <div className="card-terms">
                          {project.tags.map((tag, index) => (
                            <a key={index} className="terms badge outlined" href="#">{tag}</a>
                          ))}
                        </div>
                        <div className="project-link">
                          <a 
                            href={project.link} 
                            target={project.link !== "#" ? "_blank" : "_self"}
                            onClick={project.link === "#" ? (e) => e.preventDefault() : undefined}
                          >
                            {project.link !== "#" ? "View Live Site" : "View Project Details"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta layout-2 primary-bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="cta-text">
                <span className="sub-title">Ready to build your next project?</span>
                <h2 className="title mt-3 mb-0">Let's Create Something <span>Extraordinary</span></h2>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-5 text-md-end mt-3 mt-md-0">
              <a className="btn magnetic-button" href="/contact">Start Your Project! <i className="icon bi bi-arrow-right ms-1"></i><span></span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio