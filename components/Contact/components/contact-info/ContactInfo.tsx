import React from "react";
import s from "./ContactInfo.module.scss";
import Email from "../icons/Email";
import Location from "../icons/Location";
import Phone from "../icons/Phone";

const ContactInfo = () => {
  const contactInfoData = [
    {
      id: 1,
      Component: <Location />,
      title: "Address",
      text: "Davitashen 1 block, 7/22",
    },
    {
      id: 2,
      Component: <Phone />,
      title: "Phone",
      text: "+374 77 00 22 70",
    },
    {
      id: 3,
      Component: <Email />,
      title: "Email",
      text: "Gabrielyanedvard@gmail.com",
    },
  ];
  return (
    <div className={s.infoContainer}>
      {contactInfoData.map((datum) => (
        <div className={s.itemContainer} key={datum.id}>
          <div className={s.icon}>{datum.Component}</div>
          <div className={s.info}>
            <div className={s.title}>{datum.title}</div>
            <div className={s.text}>{datum.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
