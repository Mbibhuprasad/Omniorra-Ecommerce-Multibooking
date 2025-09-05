import BookingForm from "./BookingForm";
import Clients from "./Clients";
import Features from "./Features";
import Herohosp from "./heroHosp";
import Hospabout from "./hospAbout";

import Testimonials from "./Testimonials";
import TopHospital from "./TopHospital";

export default function Hospital() {
  return (
    <div>
      <Herohosp />
      <Hospabout />
      <Features />
      <TopHospital />
      <Clients />
      <Testimonials />
      <BookingForm />
    </div>
  );
}
