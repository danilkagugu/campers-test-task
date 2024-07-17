// import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import css from "./ModalItem.module.css";
import { CiStar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import FeaturesInfo from "../FeaturesInfo/FeaturesInfo";
import ReviewsInfo from "../ReviewsInfo/ReviewsInfo";

const ModalItem = ({
  gallery,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  adults,
  transmission,
  engine,
  bathroom,
  beds,
  details,
  kitchen,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [active, setActive] = useState("features");

  const openFeatures = () => {
    setActive("features");
    setFeaturesOpen(true);
    setReviewsOpen(false);
  };
  const openReviews = () => {
    setFeaturesOpen(false);
    setReviewsOpen(true);
    setActive("reviews");
  };
  return (
    <div>
      <h1 className={css.title}>{name}</h1>
      <div className={css.ratingBox}>
        <div className={css.rewiews}>
          <CiStar className={css.iconStar} />
          <p className={css.itemRating}>
            {rating}({reviews.length} reviews)
          </p>
        </div>
        <div className={css.locationBox}>
          <IoLocationOutline />
          <p className={css.itemLocation}>{location}</p>
        </div>
      </div>

      <div className={css.campersBox}>
        <p className={css.itemPrice}>€{price}.00</p>
        <ul className={css.imgList}>
          {gallery &&
            gallery.map((img, i) => (
              <li key={i}>
                <img
                  className={css.imgCamper}
                  src={img}
                  alt={name}
                  width={290}
                  height={310}
                />
              </li>
            ))}
        </ul>
        <p className={css.desriptionItem}>{description}</p>
      </div>
      <div className={css.additionalInfoBox}>
        <p
          className={`${css.additionalInfo} ${
            active === "features" ? css.active : ""
          }`}
          onClick={openFeatures}
        >
          Features
        </p>
        <p
          className={`${css.additionalInfo} ${
            active === "reviews" ? css.active : ""
          }`}
          onClick={openReviews}
        >
          Reviews
        </p>
      </div>
      {featuresOpen && (
        <FeaturesInfo
          adults={adults}
          transmission={transmission}
          engine={engine}
          bathroom={bathroom}
          beds={beds}
          ac={details.airConditioner}
          kitchen={kitchen}
          CD={details.CD}
          radio={details.radio}
          hob={details.hob}
          form={form}
          length={length}
          width={width}
          height={height}
          tank={tank}
          consumption={consumption}
        />
      )}
      {reviewsOpen && <ReviewsInfo />}
    </div>
  );
};

export default ModalItem;