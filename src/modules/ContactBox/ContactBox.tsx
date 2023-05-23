import React from "react";
import Image from "next/image";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Location from "../../assets/icons/location.svg";
import Button from "../../components/Button/Button";

function ContactBox() {
  return (
    <div className="text-blue">
      <div className="flex flex-col gap-10 lg:flex-row lg:border-2 lg:border-blue  lg:p-14 lg:container">
        <div className="contact_info flex flex-col gap-10 md:max-w-[500px]">
          <h2 className="style-h4 uppercase">Get in touch with us here</h2>

          <div className="flex flex-row gap-5 items-center">
            <Image src={Phone} alt="Phone icon" width={35} />
            <p className="style-body">+45 26 11 89 56 (between 9am-16pm everyday)</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Image src={Mail} alt="Phone icon" width={30} />
            <p className="style-body">hello@omhucph.com</p>
          </div>

          <div className="flex flex-row gap-5 items-center">
            <Image src={Location} alt="Phone icon" width={35} />
            <p className="style-body">Kram & Klenodier (OMHU CPH) Kongevejen 340 (basement level, entrace from the back of the building), 2840 Holte</p>
          </div>
          <div>
            <Button intent="primary" kind="link" href="/showroom" size="small" label="Book a time slot" />
          </div>
        </div>

        <div className="map_container md:min-w-fit lg:min-w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.2156292829436!2d12.470793857093824!3d55.812151778833794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524f4775e9be69%3A0x6d0a204eb0382072!2sKram%20%26%20Klenodier!5e0!3m2!1sen!2sdk!4v1684841640212!5m2!1sen!2sdk"
            width="100%"
            height="300"
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
