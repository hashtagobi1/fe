import React from "react";

type Props = {};

const AnnouncementBar = (props: Props) => {
  const renderAnnouncement = (announcement: string) => {
    return (
      <li className="justify-center items-center flex">
        <span>
          <b className="text-white text-center font-regular">{announcement}</b>
        </span>
      </li>
    );
  };
  return (
    <div className="bg-gradient-to-r from-brandPurple from-60% to-brandBlue">
      <ul className="">
        {renderAnnouncement("test announcement 1")}
        {renderAnnouncement("test announcement 2")}
        {renderAnnouncement("test announcement 3")}
        {renderAnnouncement("test announcement 4")}
      </ul>
    </div>
  );
};

export default AnnouncementBar;
