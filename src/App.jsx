import { useState } from "react";
import Marquee from "react-fast-marquee";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const [backShow, setBackShow] = useState(true);
  function handleTapMe() {
    setBackShow((state) => !state);
  }
  return (
    <div className="bg-yellow-50 h-screen">
      {/* Header */}
      <div className="bg-yellow-200 py-6 text-center">
        <h1 className="text-3xl font-bold">
          Honey<span className="text-yellow-900">Comb</span> Task🍯
        </h1>
      </div>
      {/* Custom Marquee and Button Card */}
      <div className="flex ml-48 font-bold">
        <div className="">
          <div>
            <div className="">
              <h1
                className="absolute z-10 p-3 mt-20 text-lg hover:bg-black hover:text-white"
                onMouseEnter={() => {
                  setShow(true);
                }}
                onMouseLeave={() => {
                  setShow(false);
                }}
              >
                Home
              </h1>
              {show && (
                <Marquee className="absolute my-auto mt-20 bg p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  nisi aliquid cupiditate voluptates sint nulla exercitationem
                  fuga nihil, eaque architecto. Pariatur officiis saepe aut quas
                  at ex porro veritatis architecto.
                </Marquee>
              )}
            </div>

            <div className="">
              <h1
                className="absolute z-10 mt-36 p-3 text-lg hover:bg-black hover:text-white"
                onMouseEnter={() => {
                  setShow1(true);
                }}
                onMouseLeave={() => {
                  setShow1(false);
                }}
              >
                About Us
              </h1>
              {show1 && (
                <Marquee className="absolute my-auto mt-36  p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit consectetur est, neque et necessitatibus tempore
                  molestias nihil exercitationem quasi obcaecati dolorem ut,
                  maiores, quis illo at in cupiditate quidem incidunt!
                </Marquee>
              )}
            </div>
            <div className="">
              <h1
                className="absolute z-10 mt-52 p-3 text-lg hover:bg-black hover:text-white"
                onMouseEnter={() => {
                  setShow3(true);
                }}
                onMouseLeave={() => {
                  setShow3(false);
                }}
              >
                Carrers
              </h1>
              {show3 && (
                <Marquee className="absolute my-auto mt-52  p-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur aliquid nostrum dignissimos possimus dolore
                  deleniti fuga! Error velit dolores deserunt voluptate,
                  voluptas reprehenderit tempora sapiente. Voluptatem inventore
                  illum harum numquam.
                </Marquee>
              )}
            </div>
            <div className="">
              <h1
                className="absolute z-10 mt-[17rem] p-3 text-lg hover:bg-black hover:text-white"
                onMouseEnter={() => {
                  setShow4(true);
                }}
                onMouseLeave={() => {
                  setShow4(false);
                }}
              >
                Contact Us
              </h1>
              {show4 && (
                <Marquee className="absolute my-auto mt-[17rem]  p-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur dolor sapiente rem assumenda! Adipisci qui eveniet
                  in voluptatem sapiente assumenda quia. Temporibus porro nam
                  laborum aspernatur molestias impedit sunt iusto!
                </Marquee>
              )}
            </div>
          </div>
        </div>
        {/* ggggg */}
        <div className="">
          <div
            className={
              backShow
                ? "ml-[1280px]  flex translate-x-2 transform items-center justify-center duration-1000"
                : "  ml-[350px] flex -translate-x-2 transform items-center justify-center duration-1000"
            }
          >
            <button onClick={handleTapMe} className="mr-4 mt-[8rem]">
              <BsFillArrowLeftCircleFill size={30} color="#000" />
            </button>
            <div className="mt-[10rem] h-80 w-96 rounded-lg bg-gray-700">
              <div className="text-white text-lg p-10">
                &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, molestias! Minima qui hic voluptatem, corrupti
                molestiae soluta deleniti consequatur nulla vero dolor atque
                natus animi pariatur ipsa impedit explicabo quod! &quot;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Social Media Icons */}
      <div>
        <div className="flex flex-row space-x-8 mt-16 justify-end mr-16 ">
          <div className="">
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <ImWhatsapp color="#000" size={25} />
            </a>
          </div>
          <div className=" ">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              <ImGithub color="#000" size={25} />
            </a>
          </div>
          <div className=" ">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              <ImFacebook color="#000" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
