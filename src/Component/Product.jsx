import React from "react";
import { NavLink } from "react-router";

const Product = ({ product }) => {
  const {
    pictureURL,
    foodName,
    rating,
    availableQuantity,
    price,
    foodId,
  } = product;

  return (
    <article className="
      card 
      w-full 
      bg-base-100 
      border border-base-200 
      shadow-md 
      hover:shadow-xl 
      transition-shadow 
      duration-300
    ">
      {/* Image */}
      <figure className="
        px-4 
        pt-4 
        bg-base-200/40 
        h-52 
        sm:h-56 
        md:h-60 
        flex 
        items-center 
        justify-center
      ">
        <img
          src={pictureURL}
          alt={foodName}
          loading="lazy"
          className="
            rounded-lg 
            h-full 
            w-full 
            object-contain 
            transition-transform 
            duration-300 
            hover:scale-[1.04]
          "
        />
      </figure>

      {/* Body */}
      <div className="card-body p-4 sm:p-5">
        {/* Title & Rating */}
        <div className="flex justify-between items-start gap-2">
          <h2
            className="card-title text-base sm:text-lg font-semibold truncate"
            title={foodName}
          >
            {foodName}
          </h2>

          <span className="
            badge 
            badge-warning 
            badge-sm 
            sm:badge-md 
            font-medium
          ">
            {rating} <span className="ml-0.5 text-xs">★</span>
          </span>
        </div>

        {/* Availability */}
        <p className="text-sm text-base-content/70 mt-2">
          <span className="font-medium">Availability:</span>
          <span
            className={`ml-1 font-semibold ${
              availableQuantity > 0
                ? "text-success"
                : "text-error"
            }`}
          >
            {availableQuantity > 0
              ? `${availableQuantity} In Stock`
              : "Out of Stock"}
          </span>
        </p>

        {/* Price & Action */}
        <div className="
          card-actions 
          mt-4 
          flex 
          items-center 
          justify-between
        ">
          <span className="text-lg sm:text-xl font-bold text-primary">
            ${price}
          </span>

          <NavLink to={`/food/${foodId}`}>
            <button className="
              btn 
              btn-primary 
              btn-xs 
              sm:btn-sm 
              md:btn-md 
              flex 
              items-center 
              gap-1
            ">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default Product;
