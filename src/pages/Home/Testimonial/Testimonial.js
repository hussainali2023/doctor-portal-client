import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Henry",
      location: "India",
      img: people1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere quia maxime natus temporibus, dicta iusto excepturi laboriosam totam perferendis soluta distinctio officia earum, necessitatibus eligendi quidem mollitia! Tempore, aspernatur!",
    },
    {
      id: 2,
      name: "Winson Henry",
      location: "India",
      img: people2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti reiciendis tempora eius ad sit voluptatibus doloremque nisi quis numquam. Voluptas error, recusandae aliquid non alias labore unde laudantium explicabo!",
    },
    {
      id: 3,
      name: "Winson Henry",
      location: "India",
      img: people3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia voluptatem, error ut eaque fugiat impedit, cumque rerum velit, sapiente magnam et sed iste dignissimos in vel facilis doloremque quaerat.",
    },
  ];
  return (
    <section className=" my-16">
      <div className=" flex justify-between">
        <div>
          <h4 className=" text-xl text-primary font-semibold"> Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className=" w-24 md:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
