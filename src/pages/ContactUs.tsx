import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const Inquiry = formData.get("Inquiry");

    try {
        const response = await fetch("https://gulf-sourse-backend.onrender.com/api-contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, firstName, lastName, Inquiry }),
        });

        if (!response.ok) {
            throw new Error("Failed to send inquiry.");
        }

        console.log("Email sent successfully");
        setShowPopup(true);
    } catch (error) {
        console.error("Error submitting form:", error);
    }

    formEl.reset();
}


  return (
    <div className="pt-28 sm:pt-40">
      <section className="text-center">
        <h1 className="gradient mx-auto">Contact Us</h1>
        <div className="w-fit mx-auto">
          <div className="gradient-line"></div>
          <p className="max-w-[66ch] text-MarianShade1 leading-[1.75]">
            Have a question, need assistance, or want to learn more about our
            services? We're here to help. Please feel free to contact us using
            the information below:
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row flex-1 px-9 lg:px-33 2xl:px-52 gap-20 my-20">
        <section className="w-full p-0">
          <div className="w-fit mb-8">
            <h2>Leave us a message</h2>
            <div className="gradient-line"></div>
          </div>
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="grid grid-cols-2 gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="col-span-2"
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <textarea
              name="Inquiry"
              id=""
              className="col-span-2 h-44"
              placeholder="Inquiry"
              required
            ></textarea>
            <button
              type="submit"
              className="gradient-border bg-MarianShade1 text-white"
            >
              Send Inquiry
            </button>
          </form>
        </section>
        <section className="p-0 w-full">
          <div className="w-fit mb-8">
            <h2>Reach us directly</h2>
            <div className="gradient-line"></div>
          </div>
          <div className="text-13 text-MarianShade1 font-medium">
            <div className="mb-14">
              <div className="mb-4">
                <img
                  src="/contact-us/telephone-icon.svg"
                  alt="telephone icon"
                  className="float-start mr-2"
                />
                <p className="font-bold">Tel</p>
              </div>
              <p>+96502276963</p>
            </div>
            <div className="mb-14">
              <div className="mb-4">
                <img
                  src="/contact-us/email-icon.svg"
                  alt="email icon"
                  className="float-start mr-2"
                />
                <p className="font-bold">Email</p>
              </div>
              <p>bdm@gulfsource.net</p>
            </div>
            <div className="mb-14">
              <div className="mb-4">
                <img
                  src="/contact-us/location-icon.svg"
                  alt="location icon"
                  className="float-start mr-2"
                />
                <p className="font-bold">Address</p>
              </div>
              <p>Al Bargash Tower, Al Khobar, Saudi Arabia</p>
            </div>
          </div>
        </section>
        <AnimatePresence>
          {showPopup && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              
            >
              <motion.div
                className="bg-white p-8 rounded shadow-lg text-center"
                initial={{opacity:0, y: "-100px" }}
                animate={{opacity:100, y: 0 }}
                exit={{opacity:0, y: "-100px", transition:{duration:0.2} }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold mb-2 gradient uppercase">Thank you!</h3>
                <p>We will get back to you shortly.</p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-8 uppercase gradient-border bg-MarianShade1 text-white px-4 py-2 rounded"
                >
                  Ok
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
