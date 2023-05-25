import { Parallax } from "react-parallax";
import './Cover.css'

const Cover = ({ img, title, height }) => {


  const maxheight = height || "700"

  console.log(height);

  return (
    <div>
      <Parallax 
        style={{height:maxheight+"px"}}
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
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
