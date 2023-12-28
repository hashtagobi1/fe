import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal"; // Import the missing component
import FooterSocial from "./FooterSocial";
import FooterCertifications from "./FooterCertifications";
import FooterLanguage from "./FooterLanguage";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-5">
      <div className="font-light mb-20 max-w-sm">
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
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="px-8 py-4 font-semibold  border rounded-lg focus:border focus:border-brandBlue"
          >
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
      <ul className="flex gap-5">
        <FooterCertifications link="https://www.datocms-assets.com/45158/1685008476-certified-b-corp.svg" />
        <FooterCertifications link="https://www.datocms-assets.com/45158/1685008507-kings-awards-2023.svg" />
      </ul>
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

      <div className="text-center mt-8 opacity-50 text-xs">© SunGod 2023</div>
    </footer>
  );
};

export default Footer;
