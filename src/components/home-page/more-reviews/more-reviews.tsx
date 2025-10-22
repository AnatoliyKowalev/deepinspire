import React, { FC } from "react";
import Link from "next/link";

import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";

const MoreReviews: FC = () => (
  <section className="bg-light-texting">
    <div className="container grid py-12 md:py-15 gap-8 md:flex justify-center items-center">
      <h4 className="text-[28px]/normal font-montserrat font-bold text-center grid gap-5 md:flex items-center">
        <Icon className="text-4xl" icon="flash" />
        Check more reviews
      </h4>
      <span className="hidden h-11.25 w-[1px] bg-dividers md:block" />
      <Button variant="destructive" size="lg" asChild>
        <Link className="mx-auto md:m-0" href="#">
          Go to Testimonials
        </Link>
      </Button>
    </div>
  </section>
);

export default MoreReviews;
