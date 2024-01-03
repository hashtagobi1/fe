"use client";
import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal"; // Import the missing component
import FooterSocial from "./FooterSocial";
import FooterCertifications from "./FooterCertifications";
import FooterLanguage from "./FooterLanguage";

const Footer = () => {
  return (
    <footer className="p-5 md:pt-20 md:md:px-32">
      <div
        className="font-light 
      
      md:flex m md:justify-around md:w-full max-w-full  md:gap-12 mb-20
      "
      >
        <div className="flex flex-col">
          <p className="text-2xl md:text-lg ">
            The latest SunGod news, direct to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-4 md:text-md"
          >
            <input
              className="rounded-lg mt-4 p-4  bg-gray-100"
              type="text"
              placeholder="you@email.com"
            />
            <button className=" px-4 font-semibold  border rounded-lg focus:outline focus:border-brandBlue">
              Sign up
            </button>
          </form>
        </div>
        <FooterLinks
          linkTitle="About Us"
          links={[
            "Our Mission",
            "Explore Stories",
            "Athletes & Teams",
            "Careers",
            "Co-Brand",
            "Become a Retailer",
          ]}
        />
        <FooterLinks
          linkTitle="Support"
          links={[
            "Shipping & Delivery",
            "Lifetime Guarantee",
            "FAQs",
            "Size Guide",
            "Owner's Guide",
            "Contact Us",
          ]}
        />
      </div>
      <ul className="flex gap-5">
        <FooterCertifications link="https://www.datocms-assets.com/45158/1685008476-certified-b-corp.svg" />
        <FooterCertifications link="https://www.datocms-assets.com/45158/1685008507-kings-awards-2023.svg" />
      </ul>
      <div className="md:flex md:items-center md:justify-between">
        <ul className="flex">
          <FooterSocial url="https://www.facebook.com/sungodsunglasses" />
          <FooterSocial url="https://www.instagram.com/we_are_sungod" />
          <FooterSocial url="https://www.youtube.com/sungod" />
          <FooterSocial url="https://www.strava.com/clubs/sungod" />
        </ul>
        <FooterLanguage />
        <ul className="flex">
          <FooterLegal text="cookies" />
          <FooterLegal text="privacy" />
          <FooterLegal text="terms" />
          <FooterLegal text="sitemap" />
        </ul>
      </div>

      <div className="text-center mt-8 opacity-50 text-xs">© SunGod 2023</div>
    </footer>
  );
};

export default Footer;
