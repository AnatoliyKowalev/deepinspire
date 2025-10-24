import React, { FC } from "react";
import Image from "next/image";

const Banner: FC = () => (
  <section className="h-60 xl:h-77.5">
    <Image
      src="/img/contact-us/top_contactus.jpg"
      className="object-cover object-center h-full w-full -z-10"
      width={2000}
      height={500}
      quality={100}
      alt="Top contactus"
      priority
    />
  </section>
);

export default Banner;
