import { Parallax } from "react-parallax";
import './Cover.css'

const Cover = ({ img, title, height, description , isDescriptionCap }) => {

  const showdescription =
    description ||
    `Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.`;


  const maxheight = height || "700"
  return (
    <div>
      <Parallax
        style={{ height: maxheight + "px" }}
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
        className={`cover hero`}
      >
        <div className=" relative z-20">
          <div className="hero-content text-center relative z-20">
            <div className="max-w-md text-white">
              <h1 className="text-5xl font-bold uppercase ">{title}</h1>
              <p
                className={`py-6 ${isDescriptionCap && "text-xl uppercase"}  `}
              >
                {showdescription}
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;


/**
 *  1. If descriptionType is true description will be text-xl and capitalize
 * 
 */
