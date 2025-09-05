import React from "react";

import BookingHero from "./bookingcontent/bookingHero";
import BookingFAQs from "./bookingcontent/bookingfaqs";
import BookingCategory from "./bookingcontent/bookingCategory";
import StatsSection from "./bookingcontent/StatsSection";
import AccommodationTypes from "./bookingcontent/AccommodationTypes";
import PartnerScroller from "./bookingcontent/bookingScroll";

export default function Booking() {
  return (
    <>
      <BookingHero />
      <BookingCategory />
      <BookingFAQs />
      <StatsSection />
      <AccommodationTypes />
      <PartnerScroller />
    </>
  );
}
