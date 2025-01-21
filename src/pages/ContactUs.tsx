export default function ContactUs() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const Inquiry = formData.get("Inquiry");
    console.log(email, firstName, lastName, Inquiry);
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
              <p>+966550434248</p>
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
              <p>Al Khobar Gate Tower, Saudi Arabia</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
