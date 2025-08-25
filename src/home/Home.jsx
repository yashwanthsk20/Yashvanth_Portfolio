import React from 'react'

const Home = () => {
  return (
    <div>
        
         <section id="home" className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Hero Content */}
                            <div className="hero-content">
                                <span className="intro-text">Hello! I'm Yashvanth S K.</span>
                                <h1 className="title section-title mt-3 mt-md-4 mb-md-5">Building scalable web solutions with <span>MERN Stack</span></h1>

                                {/* Content */}
                                <div className="content d-flex flex-column flex-md-row justify-content-md-between">
                                    <div className="hero-button order-last order-md-first mt-4 mt-md-0">
                                        <a className="btn magnetic-button" href="/contact">Let's Connect! <i className="icon bi bi-arrow-right ms-1"></i><span></span></a>
                                    </div>
                                    <p className="sub-title order-first order-md-last">Full Stack Developer specializing in MongoDB, Express.js, React.js & Node.js. I create robust, user-centric web applications with modern authentication systems and optimized databases.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-bg">
                    <img className="circle-1" src="assets/img/content/hero-bg-1.svg" alt="" />
                    <img className="circle-2" src="assets/img/content/hero-bg-2.svg" alt="" />
                </div>
            </section>

            <section className="works position-relative p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-center">
                                <h3 className="title">Featured Projects</h3>
                                <a className="btn btn-outline content-btn swap-icon" href="/portfolio">View All Projects <i className="icon bi bi-arrow-right-short"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="stack-wrapper">
                            {/* Stack Item - Athena AI Chatbot */}
                            <div className="stack-item">
                                <div className="card portfolio-item layout-2 scale has-shadow">
                                    <div className="image-holder">
                                        {/* Card Thumb */}
                                        <a className="card-thumb" href="portfolio-single-dark.html">
                                            <img src="assets/mechmold/home.png" alt="" />
                                        </a>
                                        {/* Card Overlay */}
                                        <div className="card-overlay">
                                            <div className="heading">
                                                <h4 className="title mt-2 mt-md-3 mb-3">Athena AI Chatbot</h4>
                                                <div className="show-project">
                                                    <div className="card-terms">
                                                        <a className="terms badge outlined" href="#">React.js</a>
                                                        <a className="terms badge outlined" href="#">Node.js</a>
                                                        <a className="terms badge outlined" href="#">Google API</a>
                                                        <a className="terms badge outlined" href="#">JWT Auth</a>
                                                    </div>
                                                    <div className="project-link">
                                                        <a href="portfolio-single-dark.html">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Stack Item - City Hospitality Solutions */}
                            <div className="stack-item">
                                {/* Card Element */}
                                <div className="card portfolio-item layout-2 scale has-shadow">
                                    <div class="image-holder">
                                        {/* Card Thumb */}
                                        <a className="card-thumb" href="portfolio-single-dark.html">
                                            <img src="assets/city/home.png" alt="" />
                                        </a>
                                        {/* Card Overlay */}
                                        <div class="card-overlay">
                                            <div class="heading">
                                                <h4 class="title mt-2 mt-md-3 mb-3">City Hospitality Solutions</h4>
                                                <div class="show-project">
                                                    <div class="card-terms">
                                                        <a class="terms badge outlined" href="#">MERN Stack</a>
                                                        <a class="terms badge outlined" href="#">MongoDB</a>
                                                        <a class="terms badge outlined" href="#">RESTful API</a>
                                                    </div>
                                                    <div class="project-link">
                                                        <a href="portfolio-single-dark.html">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Stack Item - Terra Clenz E-commerce */}
                            <div className="stack-item">
                                <div class="card portfolio-item layout-2 scale has-shadow">
                                    <div class="image-holder">
                                        {/* Card Thumb */}
                                        <a className="card-thumb" href="portfolio-single-dark.html">
                                            <img src="assets/terra/home.png" alt="" />
                                        </a>
                                        {/* Card Overlay */}
                                        <div class="card-overlay">
                                            <div class="heading">
                                                <h4 class="title mt-2 mt-md-3 mb-3">Terra Clenz E-commerce</h4>
                                                <div class="show-project">
                                                    <div class="card-terms">
                                                        <a class="terms badge outlined" href="#">E-commerce</a>
                                                        <a class="terms badge outlined" href="#">Payment Integration</a>
                                                        <a class="terms badge outlined" href="#">User Authentication</a>
                                                    </div>
                                                    <div class="project-link">
                                                        <a href="portfolio-single-dark.html">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Stack Item - Job Portal Application */}
                            <div className="stack-item">
                                <div class="card portfolio-item layout-2 scale has-shadow">
                                    <div class="image-holder">
                                        {/* Card Thumb */}
                                        <a className="card-thumb" href="portfolio-single-dark.html">
                                            <img src="assets/terra/lang.png" alt="" />
                                        </a>
                                        {/* Card Overlay */}
                                        <div class="card-overlay">
                                            <div class="heading">
                                                <h4 class="title mt-2 mt-md-3 mb-3">Job Portal Platform</h4>
                                                <div class="show-project">
                                                    <div class="card-terms">
                                                        <a class="terms badge outlined" href="#">Full Stack</a>
                                                        <a class="terms badge outlined" href="#">Database Design</a>
                                                        <a class="terms badge outlined" href="#">User Management</a>
                                                    </div>
                                                    <div class="project-link">
                                                        <a href="portfolio-single-dark.html">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <section className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Content */}
                            <div className="content">
                                <h2 className="title reveal-text mt-0">Delivering enterprise-grade web applications with modern technology stacks and scalable architectures.</h2>
                            </div>

                            <div className="wrapper">
                                <p className="sub-title">Transforming business requirements into robust digital solutions using cutting-edge MERN stack technologies, with expertise in RESTful APIs, database optimization, and secure authentication systems.</p>
                               <a 
  className="btn magnetic-button btn-outline" 
  href="/assets/resume/Yashvanth-Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  View Resume 
  <i className="icon bi bi-arrow-right ms-1"></i>
  <span></span>
</a>

                            </div>
                        </div>
                    </div>

                    <div className="row service-wrapper items mt-md-5">
                        {/* Service Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item d-flex align-items-start">
                                <div className="item-count">01</div>
                                <div className="content">
                                    <h4 className="mt-0">Full Stack Development</h4>
                                    <p>Expert in MERN stack (MongoDB, Express.js, React.js, Node.js) with proven ability to build scalable web applications. Specializing in RESTful API development, database optimization, and responsive front-end interfaces.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item d-flex align-items-start">
                                <div className="item-count">02</div>
                                <div className="content">
                                    <h4 className="mt-0">Authentication & Security</h4>
                                    <p>Implementing robust security measures including JWT authentication, bcrypt password hashing, OAuth integration, and secure session management to protect user data and ensure application integrity.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="item d-flex align-items-start">
                                <div className="item-count">03</div>
                                <div className="content">
                                    <h4 className="mt-0">Database Architecture</h4>
                                    <p>Designing and optimizing MongoDB schemas for efficient data storage and retrieval. Experience with SQL databases and implementing effective data models that scale with business growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Marquee */}
                <div className="marquee">
                    <ul className="list-unstyled">
                        <li className="item">
                            <a href="#" className="marquee-item rounded">
                                <div className="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#61DAFB'}}>React.js</span>
                                </div>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="marquee-item rounded">
                                <div className="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#68A063'}}>Node.js</span>
                                </div>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="marquee-item rounded">
                                <div className="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#47A248'}}>MongoDB</span>
                                </div>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="marquee-item rounded">
                                <div className="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#F7DF1E'}}>JavaScript</span>
                                </div>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="marquee-item rounded">
                                <div className="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#06B6D4'}}>Tailwind CSS</span>
                                </div>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="marquee-item rounded">
                                <div className="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#000000'}}>Express.js</span>
                                </div>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="marquee-item rounded">
                                <div className="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#61DAFB'}}>React.js</span>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#" class="marquee-item rounded">
                                <div class="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#68A063'}}>Node.js</span>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#" class="marquee-item rounded">
                                <div class="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#47A248'}}>MongoDB</span>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#" class="marquee-item rounded">
                                <div class="marquee-content">
                                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#F7DF1E'}}>JavaScript</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Professional Experience Testimonials */}
                <div className="container">
                    <div className="row testimonials justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            <div className="swiper-container slider-min items">
                                <div className="swiper-wrapper">
                                    {/* Single Slide - Current Role */}
                                    <div className="swiper-slide item">
                                        <div className="testimonial text-center border rounded-5 p-4 p-md-0">
                                            {/* Testimonial Meta */}
                                            <div className="testimonial-meta">
                                                <div className="testimonial-thumb">
  <img 
    className="rounded-circle" 
    src="assets/yashvanth.jpg" 
    alt="Yashvanth" 
    style={{
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      border: '2px solid #ccc',
      marginTop: '20px'
    }} 
  />
</div>

                                                <h5 className="client-name mt-3 mb-1">Current Position</h5>
                                                <span className="client-position">Junior Full Stack Developer(1+ year Experiance) - Excerpt Technologies Pvt Ltd</span>
                                            </div>
                                            {/* Testimonial Content */}
                                            <div className="testimonial-content mt-4">
                                                <p>"Developing and maintaining scalable web applications using MERN stack. Successfully implementing RESTful APIs, MongoDB schema optimization, and secure authentication systems with JWT and OAuth integration."</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Slide - Data Analysis Experience */}
                                    <div className="swiper-slide item">
                                        <div className="testimonial text-center border rounded-5 p-4 p-md-0">
                                            {/* Testimonial Meta */}
                                            <div className="testimonial-meta">
                                                <div className="testimonial-thumb">
                                                    <img className="rounded-circle" src="assets/img/content/client-2.jpg" alt="" />
                                                </div>
                                                <h5 className="client-name mt-3 mb-1">Previous Role</h5>
                                                <span className="client-position">Data Analyst Intern - Cranes Varsity</span>
                                            </div>
                                            {/* Testimonial Content */}
                                            <div className="testimonial-content mt-4">
                                                <p>"Achieved 15% increase in data accuracy through streamlined processes. Automated weekly reports reducing generation time by 30%. Strong foundation in Python, SQL, and data analysis techniques."</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Slide - Academic Achievement */}
                                    <div className="swiper-slide item">
                                        <div className="testimonial text-center border rounded-5 p-4 p-md-0">
                                            {/* Testimonial Meta */}
                                            <div className="testimonial-meta">
                                                <div className="testimonial-thumb">
                                                    <img className="rounded-circle" src="assets/img/content/client-1.jpg" alt="" />
                                                </div>
                                                <h5 className="client-name mt-3 mb-1">Academic Excellence</h5>
                                                <span className="client-position">MCA Graduate - PES Institute</span>
                                            </div>
                                            {/* Testimonial Content */}
                                            <div className="testimonial-content mt-4">
                                                <p>"Graduated with 8.8 GPA in Master of Computer Applications. Strong foundation in algorithms, data structures, and software engineering principles. Completed MERN stack certification from Pentagon Space."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
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

         <section className="awards sticky primary-bg">
   <div className="container">
       <div className="row justify-content-between">
           <div className="col-12 col-lg-3">
               {/* Intro */}
               <div className="intro">
                   <h3 className="title">Key Achievements</h3>
               </div>
           </div>
           <div className="col-12 col-lg-8">
               <ul className="list-group list-group-flush">
                   {/* Item */}
                   <li className="list-group-item">
                       <div className="content">
                           <h4 className="title mt-0 mb-3">Full Stack Developer at Excerpt Technologies</h4>
                           <span className="tags mt-3 mt-md-0">2025 - Current Role • MERN Stack Development</span>
                       </div>
                       {/* Award Button */}
                       <a className="award-btn rounded-pill" href="#">
                           <i className="icon rotate bi bi-arrow-right-short m-0"></i>
                       </a>
                   </li>
                   
                   {/* Item */}
                   <li className="list-group-item">
                       <div className="content">
                           <h4 className="title mt-0 mb-3">Completed 6-Month Pentagon Space Internship</h4>
                           <span className="tags mt-3 mt-md-0">2024-2025 - Full Stack Development • 25% Code Efficiency Improvement</span>
                       </div>
                       {/* Award Button */}
                       <a className="award-btn rounded-pill" href="#">
                           <i className="icon rotate bi bi-arrow-right-short m-0"></i>
                       </a>
                   </li>
                   
                   {/* Item */}
                   <li className="list-group-item">
                       <div className="content">
                           <h4 className="title mt-0 mb-3">10+ Successful Freelance Projects Delivered</h4>
                           <span className="tags mt-3 mt-md-0">2023-Present - 100% Client Satisfaction Rate • E-commerce & Web Apps</span>
                       </div>
                       {/* Award Button */}
                       <a className="award-btn rounded-pill" href="#">
                           <i className="icon rotate bi bi-arrow-right-short m-0"></i>
                       </a>
                   </li>
                   
                   {/* Item */}
                   <li className="list-group-item">
                       <div className="content">
                           <h4 className="title mt-0 mb-3">15% Data Accuracy Improvement at Cranes Varsity</h4>
                           <span className="tags mt-3 mt-md-0">2023 - Data Analysis • 30% Report Generation Time Reduction</span>
                       </div>
                       {/* Award Button */}
                       <a className="award-btn rounded-pill" href="#">
                           <i className="icon rotate bi bi-arrow-right-short m-0"></i>
                       </a>
                   </li>
                   
                   {/* Item */}
                   <li className="list-group-item">
                       <div className="content">
                           <h4 className="title mt-0 mb-3">MCA Graduation with 8.8 GPA</h4>
                           <span className="tags mt-3 mt-md-0">2024 - Master of Computer Applications • Academic Excellence</span>
                       </div>
                       {/* Award Button */}
                       <a className="award-btn rounded-pill" href="#">
                           <i className="icon rotate bi bi-arrow-right-short m-0"></i>
                       </a>
                   </li>
                   
                   {/* Item */}
                   <li className="list-group-item">
                       <div className="content">
                           <h4 className="title mt-0 mb-3">Live Production Websites Deployed</h4>
                           <span className="tags mt-3 mt-md-0">2023-Present - Terra Clenz, City Hospitality, Mech Mold, BDM Tech</span>
                       </div>
                       {/* Award Button */}
                       <a className="award-btn rounded-pill" href="#">
                           <i className="icon rotate bi bi-arrow-right-short m-0"></i>
                       </a>
                   </li>
               </ul>
           </div>
       </div>
   </div>
</section>

            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-center">
                                <h3 className="title">Technical Expertise</h3>
                                <a className="btn btn-outline content-btn swap-icon" href="blog-dark.html">View All Skills <i className="icon bi bi-arrow-right-short"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            {/* Post */}
                            <div className="card blog-item">
                                <div className="image-holder">
                                    {/* Card Thumb */}
                                    <a className="card-thumb" href="blog-single-dark.html">
                                        <img src="assets/img/blog/blog-1.jpg" alt="" />
                                    </a>
                                    <div className="card-overlay top fade-down">
                                        <div className="logo">
                                            <img src="assets/img/logo/logo.png" alt="" />
                                        </div>
                                        <div className="post-meta d-flex flex-column ms-3">
                                            <span>Expertise in</span>
                                            <span className="post-author"><strong>Frontend</strong></span>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Overlay */}
                                <div className="card-content mt-3">
                                    <div className="heading">
                                        <div className="post-meta d-flex">
                                            <span className="post-date"><i className="bi bi-code-square me-1"></i>Frontend Technologies</span>
                                        </div>
                                        <h4 className="title my-2">
                                            <a href="blog-single-dark.html">React.js, HTML5, CSS3, JavaScript</a>
                                        </h4>
                                        <div className="card-terms">
                                            <a className="terms badge outlined" href="#">Tailwind CSS</a>
                                            <a className="terms badge outlined" href="#">Material-UI</a>
                                            <a className="terms badge outlined" href="#">Responsive Design</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 item">
                            {/* Post */}
                            <div className="card blog-item">
                                <div className="image-holder">
                                    {/* Card Thumb */}
                                    <a className="card-thumb" href="blog-single-dark.html">
                                        <img src="assets/img/blog/blog-2.jpg" alt="" />
                                    </a>
                                    <div className="card-overlay top fade-down">
                                        <div className="logo">
                                            <img src="assets/img/logo/logo.png" alt="" />
                                        </div>
                                        <div className="post-meta d-flex flex-column ms-3">
                                            <span>Expertise in</span>
                                            <span className="post-author"><strong>Backend</strong></span>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Overlay */}
                                <div className="card-content mt-3">
                                    <div className="heading">
                                        <div className="post-meta d-flex">
                                            <span className="post-date"><i className="bi bi-server me-1"></i>Backend Technologies</span>
                                        </div>
                                        <h4 className="title my-2">
                                            <a href="blog-single-dark.html">Node.js, Express.js, RESTful APIs</a>
                                        </h4>
                                        <div className="card-terms">
                                            <a className="terms badge outlined" href="#">JWT Authentication</a>
                                            <a className="terms badge outlined" href="#">Middleware</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 item">
                            {/* Post */}
                            <div className="card blog-item">
                                <div className="image-holder">
                                    {/* Card Thumb */}
                                    <a className="card-thumb" href="blog-single-dark.html">
                                        <img src="assets/img/blog/blog-3.jpg" alt="" />
                                    </a>
                                    <div className="card-overlay top fade-down">
                                        <div className="logo">
                                            <img src="assets/img/logo/logo.png" alt="" />
                                        </div>
                                        <div className="post-meta d-flex flex-column ms-3">
                                            <span>Expertise in</span>
                                            <span className="post-author"><strong>Database</strong></span>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Overlay */}
                                <div className="card-content mt-3">
                                    <div className="heading">
                                        <div className="post-meta d-flex">
                                            <span className="post-date"><i className="bi bi-database me-1"></i>Database Management</span>
                                        </div>
                                        <h4 className="title my-2">
                                            <a href="blog-single-dark.html">MongoDB, SQL, MySQL</a>
                                        </h4>
                                        <div className="card-terms">
                                            <a className="terms badge outlined" href="#">Schema Design</a>
                                            <a className="terms badge outlined" href="#">Optimization</a>
                                            <a className="terms badge outlined" href="#">Data Modeling</a>
                                        </div>
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
                            <h2 className="title mb-0 mb-md-2">Let's Build Something</h2>
                            <div className="cta-text">
                                <span className="line-item">Amazing Together</span>
                                <span className="line"></span>
                                <a className="btn magnetic-button" href="/contact">Hire Me! <i className="icon bi bi-arrow-right ms-1"></i><span></span></a>
                            </div>

                            {/* Socials */}
                            <div className="socials mt-5">
                                <nav className="nav justify-content-center">
                                    <a className="nav-link swap-icon" href="https://www.linkedin.com/in/yashwanth-s-k-251b70202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn <i className="icon rotate bi bi-arrow-right-short"></i></a>
                                    <a className="nav-link swap-icon" href="https://github.com/yashwanthsk20/">GitHub <i className="icon rotate bi bi-arrow-right-short"></i></a>
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

export default Home