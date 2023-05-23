import React from "react";
import StarFull from "../../assets/icons/star_full.svg";
import Image from "next/image";
import StarHalf from "../../assets/icons/star_half.svg";
import CharlotteT from "../../assets/Charlotte_T.jpg";
import JensP from "../../assets/Jens_P.jpg";
import StarEmpty from "../../assets/icons/star_empty.svg";
import EmilieS from "../../assets/Emilie_S.jpg";

function Reviews() {
  return (
    <div className="container reviews_wrapper flex flex-col items-center sm:place-content-center sm:flex-row gap-10 lg:justify-between">
      {/* Charlotte */}
      <div className="single_review flex flex-col gap-9 p-5 w-fit   border-blue border-2 rounded-[20px] lg:w-96 ">
        <div className="flex flex-row gap-8 items-center sm:gap-4 ">
          <div className="rounded-full w-20 h-20 overflow-hidden">
            <Image src={CharlotteT} alt="Charlotte Reviewer image" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5 w-fit sm:w-40">
            <p className="font-body style-h4 text-blue">Charlotte T.</p>
            <div className="stars flex flex-row gap-2 sm:gap-1">
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarHalf} alt="Review Star full" />
            </div>
          </div>
        </div>
        <div className="review_text w-fit">
          <p className="style-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis</p>
        </div>
      </div>
      {/* Jens */}
      <div className="single_review flex flex-col gap-9 p-5 w-fit border-blue border-2 rounded-[20px] lg:w-96 ">
        <div className="flex flex-row gap-8 items-center sm:gap-4">
          <div className="rounded-full w-20 h-20 overflow-hidden">
            <Image src={JensP} alt="Charlotte Reviewer image" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5 w-fit sm:w-40">
            <p className="font-body style-h4 text-blue">Jens P.</p>
            <div className="stars flex flex-row gap-2 sm:gap-1">
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarEmpty} alt="Review Star full" />
            </div>
          </div>
        </div>
        <div className="review_text w-fit">
          <p className="style-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis</p>
        </div>
      </div>
      {/* Emilie */}
      <div className="single_review flex flex-col gap-9 p-5 w-fit border-blue border-2 rounded-[20px]  lg:w-96 ">
        <div className="flex flex-row gap-8 items-center sm:gap-4  ">
          <div className="rounded-full w-20 h-20 overflow-hidden">
            <Image src={EmilieS} alt="Charlotte Reviewer image" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5 w-fit sm:w-40">
            <p className="font-body style-h4 text-blue">Emilie S.</p>
            <div className="stars flex flex-row gap-2  sm:gap-1">
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
              <Image src={StarFull} alt="Review Star full" />
            </div>
          </div>
        </div>
        <div className="review_text w-fit">
          <p className="style-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
