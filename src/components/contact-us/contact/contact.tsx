import React, { FC } from "react";

import Feedbacks from "@/components/shared/feedbacks";
import ContactForm, {
  FormTitle,
  SubTitle,
} from "@/components/shared/contact-form";

const Contact: FC = () => {
  return (
    <section className="container pt-10 lg:pt-15 xl:pt-20">
      <FormTitle />
      <div className="grid lg:grid-cols-2 lg:gap-12 xl:gap-10 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <SubTitle />
          <ContactForm />
        </div>
        <Feedbacks />
      </div>
    </section>
  );
};

export default Contact;
