import './Contact.css';
const Contact = () => {
  return (
    <section className="contact-page flex flex-col justify-center items-center">
      <h1 className="mt-12 mb-4 uppercase font-normal tracking-widest text-4xl text-center">
        How to contact ElWissal Client Services
      </h1>
      <h2 className="uppercase font-bold tracking-widest  text-center">
        Choose your preferred method of contact and connect with us
      </h2>
      {/* Contact information section that contain phone and email */}
      <div className="contact-info flex justify-between gap-15 text-center mt-20">
        {/* Phone Section */}
        <div className="contact-option flex flex-col gap-5 h-30 justify-between">
          <h3 className="contact-title font-bold  uppercase ">Phone</h3>
          <p className="working-times font-light">
            Monday to Sunday from 10 am to 7 pm (CET).
          </p>
          <div className="contact details">
            <i className="fa-solid fa-phone mr-3"></i>
            {/* Button and the 2 div for the underline hover animation */}
            <div className="relative group inline-block">
              <span className="cursor-pointer">Call Us +213 799560745</span>
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-0 group-hover:translate-x-0"></div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-250 ease-in-out group-hover:w-full group-hover:translate-x-0 delay-400"></div>
            </div>
          </div>
        </div>
        {/* Email Section */}
        <div className="contact-option flex flex-col gap-5 h-30 justify-between">
          <h3 className="contact-title font-bold  uppercase ">Email</h3>
          <p className="working-times font-light">
            Your inquiry will receive a response from a Client Advisor
          </p>
          <div className="contact-details">
            <i className="fa-regular fa-envelope mr-3"></i>
            {/* Button and the 2 div for the underline hover animation */}
            <div className="relative group inline-block">
              <button className="cursor-pointer">Write Us</button>
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-0 group-hover:translate-x-0"></div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-250 ease-in-out group-hover:w-full group-hover:translate-x-0 delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
