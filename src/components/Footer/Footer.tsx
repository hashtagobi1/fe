import React from "react";
import FooterLinks from "./FooterLinks";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-5">
      <div className="font-light  max-w-sm">
        <p className="text-2xl">
          The latest SunGod news, direct to your inbox.{" "}
        </p>
        <form className="flex gap-4">
          <div>
            <input
              className="rounded-lg mt-4 p-4 bg-gray-100"
              type="text"
              placeholder="you@email.com"
            />
          </div>
          <button className="px-8 py-4 font-semibold  border rounded-lg focus:border focus:border-red-500">
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
    </footer>
  );
};

export default Footer;
