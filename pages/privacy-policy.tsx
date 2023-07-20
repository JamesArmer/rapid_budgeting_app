import { NextPage } from "next";
import Layout from "../components/Layout";
import MainTitle from "../components/titles/MainTitle";
import HelpButton from "../components/buttons/HelpButton";

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout>
      <div id="topDiv" className="flex sm:w-1/2 py-2">
        <div id="titlesDiv">
          <MainTitle />
        </div>
        <div id="buttonDiv" className="flex align-middle pl-6">
          <HelpButton />
        </div>
      </div>
      <div id="parentDiv" className="sm:flex w-11/12 sm:w-2/3 m-auto py-8">
        <div>
          <h1 className="font-bold text-pink-main text-2xl sm:text-3xl">
            Privacy Policy
          </h1>
          <p className="py-2">
            <i>Last updated: 20/07/23</i>
          </p>
          <p>
            Welcome to Rapid Budgeting App ("us", "we", or "our"). We are
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy outlines how we
            collect, use, and disclose information obtained through Google Ads
            on our website. By accessing and using our website, you consent to
            the practices described in this policy.
          </p>
          <h2 className="font-bold text-pink-light text-xl sm:text-2xl py-4">
            Information We Collect
          </h2>
          <p>
            Rapid Budgeting App does not store any of the information you enter
            into the website and does not use cookies for its functionality.
            Your data is remembered between browsing sessions by using something
            called local storage within your web browser. For more information
            on local storage please visit the following link:{" "}
            <a
              href="https://www.w3schools.com/jsref/prop_win_localstorage.asp"
              target="_blank"
              className="underline"
            >
              https://www.w3schools.com/jsref/prop_win_localstorage.asp
            </a>
          </p>
          <br />
          <p>
            When you visit our website, Google Ads may collect certain
            information automatically, including but not limited to:
          </p>
          <ol className="list-decimal list-inside">
            <li className="py-1">
              <b>Device Information:</b> This includes your device's Internet
              Protocol (IP) address, browser type, device type, operating
              system, and other technical information.
            </li>
            <li className="py-1">
              <b>Cookie Data:</b> We use cookies and similar tracking
              technologies to enhance your browsing experience and deliver
              targeted advertisements. Cookies are small data files stored on
              your device that help us identify your preferences and tailor
              content to your interests.
            </li>
          </ol>
          <h2 className="font-bold text-yellow-main text-xl sm:text-2xl py-4">
            How We Use Your Information
          </h2>
          <p>
            We use the data collected through Google Ads for the following
            purposes:
          </p>
          <ol className="list-decimal list-inside">
            <li className="py-1">
              <b>Advertising:</b> Google Ads helps us display relevant
              advertisements to you based on your interests and previous
              interactions with our website.
            </li>
            <li className="py-1">
              <b>Website Analytics:</b> We utilize Google Ads' analytics
              features to understand user behavior, track website traffic, and
              improve our content and services.
            </li>
            <li className="py-1">
              <b>Remarketing:</b> We may use Google Ads' remarketing features to
              show you our ads on third-party websites after you visit our site.
            </li>
          </ol>
          <h2 className="font-bold text-red-light text-xl sm:text-2xl py-4">
            Third-Party Access
          </h2>
          <p>
            We do not sell, rent, or share your personal information obtained
            through Google Ads with third parties. However, please note that
            Google Ads and other third-party services used on our website may
            collect and process your information independently. We encourage you
            to review the respective privacy policies of these services to
            understand their data practices.
          </p>
          <h2 className="font-bold text-blue-main text-xl sm:text-2xl py-4">
            Your Choices
          </h2>
          <p>
            You can manage your preferences for how Google Ads serves you
            personalized ads by visiting the Google Ads Settings page (
            <a
              href="https://adssettings.google.com/authenticated"
              target="_blank"
              className="underline"
            >
              https://adssettings.google.com/authenticated
            </a>
            ). Additionally, you can adjust your browser settings to disable
            cookies or delete existing ones. However, please note that blocking
            cookies may affect certain features and functionality of our
            website.
          </p>
          <h2 className="font-bold text-green-main text-xl sm:text-2xl py-4">
            Security
          </h2>
          <p>
            We take reasonable measures to protect your personal information
            against unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission over the internet or electronic
            storage method is entirely secure, so we cannot guarantee absolute
            security.
          </p>
          <h2 className="font-bold text-purple-main text-xl sm:text-2xl py-4">
            Children's Privacy
          </h2>
          <p>
            Our website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children. If you are
            a parent or guardian and believe that your child has provided us
            with personal information, please contact us immediately.
          </p>
          <h2 className="font-bold text-pink-main text-xl sm:text-2xl py-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our data practices or legal requirements. The updated
            version will be posted on this page with the revised "Last updated"
            date. Please review this page periodically to stay informed about
            our data collection and usage practices.
          </p>
          <h2 className="font-bold text-pink-light text-xl sm:text-2xl py-4">
            Contact Us
          </h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the data we collect through Google Ads, please
            contact us at james.armer5@gmail.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
