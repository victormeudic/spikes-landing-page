import Image from "next/image";
import React from "react";

type TestimonialProps = {
  title: string;
  testimonial: string;
  profile: string;
  name: string;
  job: string;
};

const Testimonial = ({
  title,
  testimonial,
  profile,
  name,
  job,
}: TestimonialProps) => {
  return (
    <div className="bg-[#F6F6F6] rounded-[20px] py-[30px] pl-[30px] pr-[60px] border border-opacity-15 border-[#3E3E3E]">
      <h2 className="text-2xl font-bold text-title-color">{title}</h2>
      <p className="text-base text-[#0D0D10] my-[27px]">{testimonial}</p>
      <div className="flex items-center gap-4">
        <Image src={profile} alt="profil" width={50} height={50} />
        <div className="flex flex-col">
          <p className="text-[#080809] text-base">{name}</p>
          <p className="text-[#0C0D0F] text-sm">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
