import React, { FC } from "react";

import VideoBlock from "./components/video-block";
import FeedbacksCarousel from "./components/feedbacks-carousel";
import { SectionName, SectionTitle } from "@/components/shared/typography";

import { TESTIMONIALS } from "./constants";

const Testimonials: FC = () => {
  return (
    <section className="container overflow-hidden min-w-full xl:min-w-auto">
      <SectionName className="text-center xl:text-left" withMb>
        TESTIMONIALS:
      </SectionName>
      <SectionTitle className="text-center xl:text-left mb-7.5 xs:mb-15">
        What our clients say
      </SectionTitle>
      <div className="grid gap-10 -mx-4 md:-mx-10 xl:mx-0 xs:gag-15 md:gap-17.5">
        {TESTIMONIALS.map((testimonial) => (
          <VideoBlock {...testimonial} key={testimonial.name} />
        ))}
      </div>
      <FeedbacksCarousel />
    </section>
  );
};

export default Testimonials;
