import React from "react";
import logo from "../../assets/logo.png";

const footer = () => {
  return (
    <>
      <div className="pt-[128px] px-[0] pb-[57px] relative block bg-black ">
        <div className="p-0 text-[13px] text-white font-normal tracking-normal leading-[1.3]">
          <div className="w-[auto] p-[0_56px] m-[0_auto] align-top mb-[48px]">
            <h3 className="text-[32px] leading-[1.1] tracking-[0] transform-none text-white text-center ">
              Opening Hours
            </h3>

            <div className="text-center">
              <p className="mb-[24px] tracking-[1.5]">
                We are open all days of the week, have a look at the times below
                and see what works best for you.
              </p>
              <div className="w-[25%] inline-block align-top">
                <h3 className="mb-4">Weekday Hours</h3>
                <dl>
                  <dt className="text-[12px]">Mon to Thu</dt>
                  <dd>10:00 AM to 10:00 PM</dd>
                </dl>
              </div>
              <div className="w-[25%] inline-block align-top">
                <h3 className="mb-4">Weekday Hours</h3>
                <dl>
                  <dt className="text-[12px]">Fri &amp; Sat</dt>
                  <dd>10:00 AM to 12:0 AM</dd>
                  <dt className="Text-[12px]">Sunday</dt>
                  <dd>10:00 PM to 10:00 PM</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className=" m-[0_auto] tracking-[0] flex items-center justify-center">
          <img
            src={logo}
            alt=""
            className="mb-4 w-[auto] h-[76px] max-w-[100%] relative"
          />
        </div>
        <div className="pb-[36px] m-[0_auto] mt-[14px] text-center text-gray text-[12px] font-semibold tracking-0 leading-[16px]">
          <ul>
            <li className="tracking-[2px] font-semibold uppercase text-[10px]">
              All rights reserved
              <br />
              Copyright ©2023
              <br />
              The Freelancing Hub LLC
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default footer;
