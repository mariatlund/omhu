import React from "react";
import Image from "next/image";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Location from "../../assets/icons/location.svg";
import Button from "../../components/Button/Button";

function ContactBox() {
  return (
    <div className="text-blue ">
      <div className="flex flex-col gap-10 lg:flex-row md:border-2 md:border-blue  md:p-14 container">
        <div className="contact_info flex flex-col gap-10 md:max-w-[500px] style-body-small">
          <h2 className="style-h3 uppercase">Get in touch with us here</h2>

          <div className="flex flex-row gap-5 items-center">
            <Image src={Phone} alt="Phone icon" width={30} />
            <div>
              <a href="tel:+4526118956" className="hover:text-blue-50">
                +45 26 11 89 56
              </a>
              <br />
              <span> (between 9am-16pm everyday)</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Image src={Mail} alt="Phone icon" width={30} />
            <a href="mailto:hello@omhucph.com" className=" hover:text-blue-50">
              hello@omhucph.com
            </a>
          </div>

          <div className="flex flex-row gap-5 items-center">
            <Image src={Location} alt="Phone icon" width={30} />
            <address className="not-italic mb-2">
              Kram & Klenodier APS (OMHU CPH) <br /> Kongevejen 340, 2840 Holte <br />
              (The entrance is at the basement level at the back of the building)
            </address>
          </div>
          <div>
            <Button intent="primary" kind="link" href="/showroom" size="small" label="Book a time slot" />
          </div>
        </div>

        <div className="map_container md:min-w-fit lg:min-w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.2156292829436!2d12.470793857093824!3d55.812151778833794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524f4775e9be69%3A0x6d0a204eb0382072!2sKram%20%26%20Klenodier!5e0!3m2!1sen!2sdk!4v1684841640212!5m2!1sen!2sdk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Maps"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
