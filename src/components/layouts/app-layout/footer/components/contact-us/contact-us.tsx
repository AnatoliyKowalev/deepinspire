import React, { FC } from "react";

import Feedbacks from "../feedbacks";
import ContactForm from "./contact-form";

const ContactUs: FC = () => (
  <div className="relative z-2 container lg:w-full [@media_(min-width:800px)_and_(max-width:992px)]:max-w-[none]">
    <div className="bg-[linear-gradient(127deg,#7688DE_11.67%,#715BC9_100%)] rounded-[40px] p-6 pt-8 xs:p-8 xs:pt-9 md:p-12 md:pt-9 lg:p-8 lg:pl-16 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-10 xl:grid-cols-12">
      <div className="text-light-texting xl:col-span-6">
        <div className="font-montserrat font-bold text-4xl/normal mb-2">
          Contact us
        </div>
        <div className="text-base whitespace-pre-line mb-5 xs:mb-6">
          {`We’d like to hear from you. \n Tell us about your project or the
          challenge you have.`}
        </div>
        <ContactForm />
      </div>
      <Feedbacks />
    </div>
  </div>
);

export default ContactUs;
