import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_w4vb97g", // replace with your EmailJS service ID
        "template_cyy2g7s", // replace with your EmailJS template ID
        form.current,
        "0Yj2MKF10WJkLI58Y" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div>
      {/* ***** Breadcrumb Area ***** */}
      <section id="home" className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <div className="flex">
                  <h1 className="title">Let's collaborate!</h1>
                  <span className="line animate-line"></span>
                  <h1 className="title">develop</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** Rounded Div Wrapper ***** */}
      <div className="content-round">
        <div className="rounded-div-wrapper">
          <div className="rounded-div">
            <div className="rounded-div-background"></div>
          </div>
        </div>
      </div>

      {/* ***** Contact Area ***** */}
      <section className="contact-area primary-bg">
        <div className="container">
          <div className="row justify-content-between">
            {/* Contact Info */}
            <div className="col-12 col-lg-4 order-last order-md-first">
              <div className="contact-info">
                <h3>Let's discuss your next MERN Stack project</h3>
                <p>
                  I'm a Full Stack Developer specializing in MongoDB,
                  Express.js, React.js, and Node.js. Whether you need a complete
                  web application, API development, or want to discuss your
                  project ideas, I'm here to help!
                </p>

                <div className="content contact-form">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="icon icon-phone"></i>
                      <a className="content" href="tel:+917899821041">
                        +91 78998 21041
                      </a>
                    </li>
                    <li className="list-group-item">
                      <i className="icon icon-envelope-open"></i>
                      <a
                        className="content"
                        href="mailto:yashwanthsk20@gmail.com"
                      >
                        yashwanthsk20@gmail.com
                      </a>
                    </li>
                    <li className="list-group-item">
                      <i className="icon icon-location-pin"></i>
                      <a className="content" href="#">
                        Bengaluru, Karnataka, India
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-12 col-lg-7 order-first order-md-last mt-sm-4 mt-lg-0">
              <form ref={form} id="contact-form" className="contact-form" onSubmit={sendEmail}>
                
                {/* REQUIRED FIELDS */}
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="name" placeholder="Name" required />
                  <label>Name *</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" className="form-control" name="email" placeholder="Email" required />
                  <label>Email address *</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Tell me about your project..."
                    style={{ height: "120px" }}
                    required
                  ></textarea>
                  <label>Project Details *</label>
                </div>

                {/* OPTIONAL FIELDS */}
               <div className="form-floating mb-3">
  <input
    type="number"
    className="form-control"
    name="phone"
    placeholder="Phone Number"
    required
  />
  <label>Phone *</label>
</div>


                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="company_name" placeholder="Company Name" />
                  <label>Company Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="url" className="form-control" name="website" placeholder="Company Website" />
                  <label>Company Website</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="interest" placeholder="Interest" />
                  <label>I'm interested in...</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="timeline" placeholder="Project timeline" />
                  <label>Project Timeline</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="budget" placeholder="Budget" />
                  <label>Budget</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="tech_requirements" placeholder="Technology Requirements" />
                  <label>Technology Requirements</label>
                </div>

                <button type="submit" className="btn magnetic-button" disabled={status === "Sending..."}>
                  Send Message <i className="icon bi bi-arrow-right ms-1"></i>
                  <span></span>
                </button>
              </form>

              {status && <p className="form-message mt-3">{status}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
