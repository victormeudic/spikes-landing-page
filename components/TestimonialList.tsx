import React from "react";
import Testimonial from "./Testimonial";

const TestimonialList = () => {
  return (
    <div className="flex justify-center mt-[100px] w-full">
      <div className="max-w-[1100px] flex flex-col items-center">
        <h1 className="text-5xl font-bold text-title-color mb-2">
          What squaree users say
        </h1>
        <p className="text-lg font-medium text-para-color">
          Here is how homely can help you
        </p>
        <div className="flex flex-col gap-[30px] mt-[55px]">
          <div className="flex gap-5">
            <Testimonial
              title="Brilliant houses to rent"
              testimonial="All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer."
              profile="/assets/yellow-profile.svg"
              name="John Master"
              job="Director, Blue"
            />
            <Testimonial
              title="Convenient for searching apartments"
              testimonial="Cycle makes it easy to contact the most relevant users whenever I need feedback on a new product initiative. It helps me capture all the necessary customer context without friction."
              profile="/assets/green-profile.svg"
              name="John Master"
              job="Ceo, Jinx"
            />
          </div>
          <div className="flex gap-5">
            <Testimonial
              title="Convenient for searching apartments"
              testimonial="As a company with a strong Slack culture, it’s important that we find ways to meet our champions where they are, and Channeled allows us to do just that."
              profile="/assets/pink-profile.svg"
              name="John Master"
              job="Director, Jinx"
            />
            <Testimonial
              title="Secure search for all"
              testimonial="All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer."
              profile="/assets/orange-profile.svg"
              name="John Master"
              job="Ceo, Whyle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
