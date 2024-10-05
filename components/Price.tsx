import React from "react";
import { Switch } from "./ui/switch";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="mb-[100px]">
      <div className="flex justify-center items-center gap-4 mt-[101px]">
        <h1 className="text-5xl font-bold">Billed Monthly</h1>
        <Switch />
        <p className="text-xl">Billed Yearly (save 15%)</p>
      </div>
      <div className="flex w-full justify-center mt-[55px] gap-10">
        <PriceCard
          title="Free"
          price="$0"
          description="Description of the tier list will go here, copy should be concise and impactful."
          advantages={[
            "Access to All Features",
            "20% discount on backorders",
            "Domain Name Appraisal ",
            "10 Social Profiles",
          ]}
          label="Try for Free"
          annual={false}
        />
        <PriceCard
          title="Pro"
          price="$12"
          description="Description of the tier list will go here, copy should be concise and impactful."
          advantages={[
            "Access to All Features",
            "20% discount on backorders",
            "Domain Name Appraisal ",
            "10 Social Profiles",
            "Calendar View",
            "24/7 Support",
          ]}
          label="Subscribe Now"
          annual={true}
        />
      </div>
    </div>
  );
};

export default Price;
