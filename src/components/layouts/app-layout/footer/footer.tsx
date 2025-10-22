"use client";

import React, { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import ContactUs from "./components/contact-us";
import AccentGroup from "./components/accent-group";
import SocialMediaLinks from "@/components/shared/social-media-links";

import { YEAR } from "@/lib/constants";
import { DISCOVER_LINKS } from "./constants";

const Footer: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      // @ts-ignore
      window?.CLUTCHCO?.Init();
    }, 100);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="overflow-hidden">
      <ContactUs />
      <div className="z-1 bg-grey-3 w-full -mt-35 pt-35">
        <div className="container mt-11.5 xs:mt-12.5 md:mt-23 text-light-texting">
          <div className="grid xl:grid-cols-12">
            <div className="grid md:grid-cols-2 md:gap-x-7.5 xl:col-span-9 xl:gap-31">
              {/* Contact us */}
              <div className="grid gap-7.5">
                <h6 className="font-montserrat text-xl font-bold">Contacts</h6>
                <div className="space-y-6 text-sm leading-relaxed xs:grid xs:grid-cols-2 xs:gap-x-6 md:flex md:flex-col">
                  <AccentGroup name="Contact Us">
                    <div>
                      <a
                        href="mailto:hello@deepinspire.com"
                        className="hover:underline block"
                      >
                        hello@deepinspire.com
                      </a>
                      <a
                        href="tel:442045771162"
                        className="hover:underline block"
                      >
                        +44 20 4577 1162
                      </a>
                    </div>
                  </AccentGroup>
                  <AccentGroup
                    className="xs:col-start-1 xs:row-span-2"
                    name="United Kingdom"
                  >
                    <p>
                      71-75 Shelton Street, Covent Garden, London
                      <br />
                      WC2H 9JQ, UK
                    </p>
                  </AccentGroup>
                  <AccentGroup
                    className="xs:col-start-2 xs:row-span-2"
                    name="Ukraine"
                  >
                    <p>33a Lychakivska Street, Lviv, 79008, Ukraine</p>
                  </AccentGroup>
                </div>
              </div>
              {/* Discover DeepInspire */}
              <div className="grid gap-7.5 mt-12.5 md:mt-0">
                <h6 className="font-montserrat text-xl font-bold">
                  Discover DeepInspire
                </h6>
                <div className="grid gap-5 text-sm leading-relaxed xs:grid-cols-2 xs:gap-x-0 md:flex md:flex-col">
                  {DISCOVER_LINKS.map(({ link, text }, key) => (
                    <Link href={link} key={key}>
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-7.5 mt-7.5 md:grid md:grid-cols-2 xl:flex xl:w-63.75 xl:col-span-3 xl:my-auto">
              <div className="w-full flex flex-col gap-7.5 xs:flex-row items-center xs:gap-5 xl:flex-col xl:gap-6.25">
                <Image
                  src="/img/footer/footer_clutch.png"
                  className="w-24.25 h-26.5 xs:w-18.75 xs:h-20.5 xl:w-24.25 xl:h-26.5"
                  width={400}
                  height={400}
                  alt="Clutch"
                />
                <p className="text-center text-xs xs:text-left xl:text-center">
                  Clutch ranks DeepInspire among Top FinTech Software
                  Development Firms in 2021
                </p>
              </div>
              <div
                className="clutch-widget w-[192px] h-[40px] xs:mr-auto xl:mx-auto"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-height="40"
                data-nofollow="false"
                data-expandifr="true"
                data-darkbg="darkbg"
                data-clutchcompany-id="106092"
              />
            </div>
          </div>
          <div className="w-full h-[1px] bg-light-texting/10 my-10 xs:my-12.5 md:my-10 lg:mt-12.5" />
          <div className="flex flex-col items-center text-grey-2 pb-12.5 text-sm md:grid md:grid-cols-2 md:gap-7.5 xl:grid-cols-12">
            <SocialMediaLinks className="md:gap-6 md:justify-start xl:col-span-5" />
            <div className="flex flex-col items-center md:flex-row md:gap-17 md:justify-between xl:col-span-7">
              <Link className="mt-10 mb-5 xs:mt-12.5 md:m-0" href="#">
                Privacy Policy
              </Link>
              <span className="md:text-right md:w-41.5">{`© DeepInspire, 2000-${YEAR}. All rights reserved.`}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
