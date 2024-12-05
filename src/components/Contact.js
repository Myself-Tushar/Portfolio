import React from 'react';

function Contact() {
  const showMessage = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white text-center">
      <div className="containerr">
        <h2 className="display-6 fw-bold mb-4">Contact Me</h2>
        <form className="row g-3 justify-content-center" onSubmit={showMessage}>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success btn-lg transform transition-transform duration-200 active:scale-95 active:shadow-md">Send Message</button>
          </div>
        </form>
      </div>

      <br />
      <div className="social-links">
        <a href="https://www.linkedin.com/in/tushar-singha-35a6b1334/" className="hover:text-green-400">LinkedIn</a> | 
        <a href="https://github.com/Myself-Tushar" className="hover:text-green-400"> GitHub</a> | 
        <a href="https://x.com/Tech_TSR" className="hover:text-green-400"> Twitter</a>
      </div>

<p class="footer-text">© 2024 Tech TSR. All rights reserved.</p>
    </section>
  );
}

export default Contact;