import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-MarianShade4 text-13 text-PictonTint4 py-8 w-full">
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3">
        <img src="/Logo.svg" alt="logo" className="mb-4 sm:mb-0 xs:col-span-2 md:col-span-1"/>
        <div className="flex flex-col gap-3">
          <h2 className="mb-4">Jump to</h2>
          <Link to="vision">Our Mission & Vision</Link>
          <Link to="Products-Services">Products & Services</Link>
          <Link to="certifications">Certifications</Link>
          <Link to="contact-us">Get in touch with us</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="mb-4">Contact Us</h2>
          <p>+96502276963</p>
          <p>Al Bargash Tower, Al Khobar, Saudi Arabia</p>
          <p>bdm@gulfsource.net</p>
          <div className="flex gap-4">
            <Link to="">
              <img src="/facebook-icon.svg" alt="facebook-icon" />
            </Link>
            <Link to="">
              <img src="/instagram-icon.svg" alt="instagram-icon" />
            </Link>
            <Link to="">
              <img src="/linkedin-icon.svg" alt="linkedin-icon" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-[0.625rem] mt-6 xs:mt-4 lg:mt-0">Copyright © 2024. All rights reserved. GulfSource</p>
    </section>
  );
}
