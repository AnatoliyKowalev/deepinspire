import React, { FC } from "react";
import Image from "next/image";

const Banner: FC = () => (
  <section className="h-60 xl:h-77.5">
    <Image
      src="/img/contact-us/top_contactus.jpg"
      className="object-cover h-full w-full -z-10 object-[19%] xs:object-[22%] md:object-[30%] lg:object-center"
      width={2000}
      height={500}
      quality={100}
      alt="Top contactus"
      priority
    />
  </section>
);

export default Banner;
