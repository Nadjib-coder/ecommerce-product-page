const Contact = () => {
  return (
    <section className="contact-page">
      <h1>How to contact ElWissal Client Services</h1>
      <h2>Choose your preferred method of contact and connect with us</h2>
      <div className="contact-info">
        <div className="contact-option">
          <h3 className="contact-title">Phone</h3>
          <p className="working-times">
            Monday to Sunday from 10 am to 7 pm (CET).
          </p>
          <div className="contact details">
            <img />
            <span></span>
          </div>
        </div>
        <div className="contact-option">
          <h3 className="contact-title">Email</h3>
          <p className="working-times">
            Your inquiry will receive a response from a Client Advisor
          </p>
          <div className="contact details">
            <img />
            <a href="mailto:nadjibmouhoun1@gmail.com">Write Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
