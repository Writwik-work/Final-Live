import React from "react";

const InnerContactInfo = () => {
  const info_items = [
    {
      src: "/img/icon/loction_icon03.png",
      title: "Address",
      desc: (
        <>
          <p>2599, Ship Krupa Association, Kansad, Sachin, Surat 394230</p>
        </>
      ),
    },
    {
      src: "/img/icon/mail_icon03.png",
      title: "Mail",
      desc: (
        <>
          <a href="mailto:ingversionsdigital@gmail.com">ingversionsdigital@gmail.com</a>
        </>
      ),
    },
    {
      src: "/img/icon/phone_icon03.png",
      title: "For Support",
      desc: (
        <>
          <a href="tel:+918103684321">+918103684321</a>
        </>
      ),
    },
  ];

  return (
    <ul className="list-wrap">
      {info_items.map((x, index) => (
        <li key={index}>
          <div className="contact-info-item">
            <div className="icon">
              <img src={x.src} alt="" />
            </div>
            <div className="content">
              <h6 className="title">{x.title}</h6>
              {x.desc}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InnerContactInfo;
