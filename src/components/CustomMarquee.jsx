import { useState } from "react";
import Marquee from "react-fast-marquee";

function CustomMarquee({ name, marginTop1, marginTop2 }) {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div>
        <div className="">
          <h1
            className={`absolute z-10 p-5 text-lg hover:bg-black hover:text-white mt-${marginTop1}`}
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
          >
            {name}
          </h1>
          {show && (
            <Marquee
              className={`absolute my-auto bg-gray-500 p-5 mt-${marginTop2}`}
            >
              hello hello hello hello
            </Marquee>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomMarquee;
