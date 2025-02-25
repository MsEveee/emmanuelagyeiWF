import { Mail, MapPinHouse, PhoneCall } from "lucide-react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrauy3h",
        "template_kp7mmhn",
        formRef.current,
        "au2w0jUnz4Oke9625"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row py-16 items-center md:items-start gap-8 px-4 md:px-16">
        <div className="w-full md:w-1/2 rounded-md py-14">
          <h1 className="text-3xl font-semibold py-5 underline">
            Partner with Us Today
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
            At EA Welding & Fabrication, we believe in the power of strong
            partnerships. Whether you're looking for custom metal fabrication,
            industrial welding solutions, or a trusted collaborator for your
            next project, we’re here to deliver excellence. Have a project in
            mind? Let’s discuss how we can bring your vision to life with
            precision and quality craftsmanship.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="px-4 md:px-14 py-4">
            <h1 className="font-bold text-2xl md:text-3xl py-2">
              Get in touch
            </h1>
            <p>Send us a message.</p>
          </div>

          <div className="px-4 md:px-14">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                className="h-12 rounded px-5 outline-none border w-full"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="h-12 rounded px-5 outline-none border w-full"
                required
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone number"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <textarea
                name="user_message"
                placeholder="Message..."
                className="h-28 rounded px-5 py-3 outline-none border w-full"
                required
              ></textarea>
              <button
                type="submit"
                className="py-3 border rounded-lg bg-[#A93A01] text-white w-36 px-4 self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-[#A93A01] text-white">
            <MapPinHouse />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Locate Us:</h2>
            <p className="text-sm md:text-base">
            Mampong Ashanti Warakese
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-[#A93A01] text-white">
            <PhoneCall />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Call Us:</h2>
            <p className="text-sm md:text-base">
              +233 247-989448
              
              <br />
              +233 200-409464
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-[#A93A01] text-white">
            <Mail />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Email:</h2>
            <p className="text-sm md:text-base">
            emmanuelagyeiotuo@gmail.com 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
