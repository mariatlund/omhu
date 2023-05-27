/* eslint-disable react/no-unescaped-entities */
import React from "react";
import StarFull from "../../assets/icons/star_full.svg";
import Image from "next/image";
import StarHalf from "../../assets/icons/star_half.svg";
import CharlotteT from "../../assets/Charlotte_T.jpg";
import JensP from "../../assets/Jens_P.jpg";
import StarEmpty from "../../assets/icons/star_empty.svg";
import EmilieS from "../../assets/Emilie_S.jpg";

interface ReviewsProps {
  title: string;
}

function Reviews({ title }: ReviewsProps) {
  return (
    <section className="container">
      <div className="reviews_wrapper grid grid-cols-1 ">
        <div>
          <h2 className="style-h3 uppercase mb-5">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center sm:place-content-center gap-10">
          {/* Charlotte */}
          <div
            className="
          single_review flex flex-col gap-9 p-5   border-blue border-2 rounded-[20px] sm:col-start-1 h-full"
          >
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:gap-4 ">
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
              <p className="style-body">
                I recently purchased this item and I'm extremely pleased with my choice. It offers excellent comfort and support, making it perfect for relaxing after a long day. The design effortlessly complements my existing decor, adding a touch
                of sophistication to the room. Not only does it look great, but it is also highly functional. The item's sturdy construction and comfortable padding make it a versatile piece that can be used in various ways.
              </p>
            </div>
          </div>
          {/* Jens */}
          <div className="single_review flex flex-col gap-9 p-5  border-blue border-2 rounded-[20px] sm:col-start-2 h-full ">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:gap-4">
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
              <p className="style-body">I recently purchased this product, and it has quickly become one of my favorite additions to my home. I couldn't be happier with this purchase. </p>
            </div>
          </div>
          {/* Emilie */}
          <div className="single_review flex flex-col gap-9 p-5  border-blue border-2 rounded-[20px]  sm:col-start-1 sm:row-start-2 lg:col-start-3 lg:row-start-1 h-full">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:gap-4  ">
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
              <p className="style-body">I appreciate the durable construction and superior craftsmanship that ensure this item will last. If you're looking for a cozy and personal addition to your space, this item is a definite winner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
