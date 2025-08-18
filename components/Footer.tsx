"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  const handleEmailTo = (to?: string, subject?: string, body?: string) => {
    to = "khatibullahrahel25@gmail.com";
    subject = "Full Stack Developer Inquiry";
    body = "Hi Rahel, \n\nI'd like to get in touch about...";

    // Handle click event open email
    const base = "https://mail.google.com/mail/?view=cm&fs=1&tf=1";
    const params = new URLSearchParams({
      to: to,
      su: subject,
      body: body,
    });

    const gmailUrl = `${base}&${params.toString()}`;
    const mailto = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Fallback to mailto if Gmail fails
    if (isMobile) window.location.href = mailto;
    else {
      const win = window.open(gmailUrl, "_blank");

      if (!win) window.location.href = mailto;
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="footer grid img"
          className="w-full opacity-50"
          width={1920}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        {/* <Link href={""}> */}
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={handleEmailTo}
        />
        {/* </Link> */}
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-sm md:text-base md:font-normal font-light">
          Copyright © 2025 Rahel
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={profile.img}
                alt={profile.id}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
