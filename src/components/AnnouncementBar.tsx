"use client";
import React, { useEffect, useState } from "react";

type Props = {
  fetchedAnnouncements: any;
  test: any;
};

const AnnouncementBar = ({ fetchedAnnouncements, test }: Props) => {
  const [announcements, setAnnouncements] = useState<string>(
    "Recieve 10% off your first order"
  );
  console.log({ fetchedAnnouncements, test });
  useEffect(() => {
    const texts = [
      "FREE Delivery on all orders over £60/$80",
      "Christmas Delivery Dates",
      "Over 19,000 ★★★★★ reviews",
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setAnnouncements(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderAnnouncement = (announcement: string) => {
    return (
      // TODO: make this fade in and out
      <li className="justify-center items-center flex">
        <span>
          <b className="text-white text-center font-light">{announcement}</b>
        </span>
      </li>
    );
  };
  return (
    <div className="bg-gradient-to-r cursor-pointer from-brandPurple from-60% to-brandBlue">
      <ul className="p-4">{renderAnnouncement(announcements)}</ul>
    </div>
  );
};

export default AnnouncementBar;
