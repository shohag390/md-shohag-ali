// GoogleMapIframe.jsx
import React from "react";

const GoogleMapIframe = () => {
  return (
    <div
      className="w-full lg:h-[500px] rounded-2xl overflow-hidden"
      data-aos="zoom-in-up"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8676.041858136512!2d89.11895082240756!3d23.895779190960763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1761329464516!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMapIframe;
