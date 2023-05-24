import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";


const Testimonials = () => {
   const [reviews, setReviews] = useState([])

    useEffect(()=> {
        fetch('/data/reviews.json')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [])

    return (
      <section className="my-20">
        <SectionTitle subHeading="What our client say" heading="Testimonials" />
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((item) => {
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mx-20">
                      <div>
                        <Rating
                          style={{ maxWidth: 180 }}
                          value={item.rating}
                        //  onChange={setRating}
                        />
                      </div>
                      <p>{item.details}</p>
                      <h3 className="text-2xl text-orange-400">{item.name}</h3>
                    </div>
                  </SwiperSlide>
                );
            })}
          </Swiper>
        </div>
      </section>
    );
};

export default Testimonials;