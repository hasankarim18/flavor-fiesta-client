import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import './Featured.css'

const Featured = () => {
    return (
      <div className="featured-item relative pt-8 my-20 bg-fixed ">        
          <SectionTitle
            className="text-white relative z-20"
            subHeading="Check it out"
            heading="Featured item"
          />      
        <div className="px-36 py-20 md:flex gap-8 relative z-20  justify-center items-center text-white">
          <div className="">
            <img src="/assets/home/featured.jpg" alt="" />
          </div>
          <div>
            <p>Aug 2023</p>
            <p className="uppercase">Where can i get some </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nemo similique dolore aspernatur qui quaerat neque fugiat animi,
              atque ab quis, soluta optio corporis totam molestias voluptatibus
              provident nam quos.
            </p>
            <div>
              <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Featured;