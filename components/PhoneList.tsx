import React from "react";
import { Phone as PhoneType } from "../model/phones";
import Phone from "./Phone";

type Props = {
  phones: PhoneType[];
};
const PhoneList = ({ phones }: Props) => {
  return (
    <div
      className="flex flex-wrap text-center
     w-3/4 h-auto mt-10 border mx-auto 
     "
    >
      {phones.map((phone) => {
        return <Phone phone={phone} key={phone.id} />;
      })}
    </div>
  );
};

export default PhoneList;
