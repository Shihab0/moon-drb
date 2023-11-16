import "./App.css";
import banner1 from "./img/banner1.png";
import rocket from "./img/rocket.png";
import instagram from "./img/insta.jpeg";
import tiktok from "./img/tiktok.jpeg";
import youtube from "./img/yt.jpeg";
import arrow from "./img/arrow.jpeg";
import downArrow from "./img/down-arrow.png";
import top from "./img/top.png";
import support from "./img/support.png";
import lock from "./img/locked.png";
import box from "./img/package_1f4e6.png";
import graph from "./img/Unbenannt.png";
import checkRight from "./img/checkRight.png";

function App() {
  return (
    <div className="container mx-auto px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-2">
        <div className="md:col-span-2">
          <h1 className="text-4xl lg:text-6xl font-bold ">
            Boost your <br />
            <span className="inline-block mt-3 bg-gradient-to-r from-[#4B25EA] via-[#BD18E6] to-[#FB590E] text-transparent bg-clip-text">
              Social Media
            </span>
            <br />
            <span className="mt-3">Presence…</span>
          </h1>
          <p className="mt-5 text-[18px]">
            Are you looking to boost your social media presence? Look no
            further! Our genuine social media services can help you reach new
            heights.
          </p>
          <button className="mt-5 bg-slate-900 text-white font-semibold pl-4 pr-4 pt-2 pb-2 cursor-pointer rounded-md">
            Get started
          </button>
        </div>
        <div className="col-span-3 relative">
          <img className="" src={banner1} alt="" />

          <div className="absolute top-5 md:left-[20%]  lg:left-1/4 w-[370px] h-[500px] md:h-[480px] lg:h-[500px] border-4 border-slate-100 rounded-2xl ">
            <div className="border-[30px] border-white border-opacity-70 h-full rounded-2xl ">
              <div className="rounded-2xl w-full h-full bg-[#f4f4f7] shadow-md">
                <div className="py-5 px-6 w-full text-[16px]">
                  Choose the social media platform you wish to boost!
                  <img src={rocket} className="w-5 h-5 inline-block" alt="" />
                </div>
                <div className="flex justify-center items-center flex-col gap-5">
                  <div className="bg-white px-5 py-3 w-64 rounded-3xl border-2 border-slate-300 flex justify-between items-center">
                    <img src={instagram} className="" alt="" />
                    <p>Instagram</p>
                    <img src={arrow} className="" alt="" />
                  </div>
                  <div className="bg-white px-5 py-3 w-64 rounded-3xl border-2 border-slate-300 flex justify-between items-center">
                    <img src={tiktok} className="" alt="" />
                    <p>TikTok</p>
                    <img src={arrow} className="" alt="" />
                  </div>
                  <div className="bg-white px-5 py-3 w-64 rounded-3xl border-2 border-slate-300 flex justify-between items-center">
                    <img src={youtube} className="" alt="" />
                    <p>YouTube</p>
                    <img src={arrow} className="" alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <h1 className="font-semibold cursor-pointer">See more </h1>{" "}
                    <img src={downArrow} className="w-4 h-4" alt="" />
                  </div>
                  <div>
                    <button className="bg-gradient-to-r from-[#4B25EA] via-[#BD18E6] to-[#FB590E] px-14 py-2 font-semibold rounded-xl">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section -2 platform facility */}
      <div className="flex flex-col sm:items-center">
        <div className="lg:mt-44  sm:mt-60 mt-80 ">
          <h1 className="text-4xl text-center font-bold mb-2">
            The #1 Platform for Social Media Growth
          </h1>
          <h5 className="text-xl text-center font-semibold mb-2 text-[#323232]">
            Grow your Social Media account the smart way.
          </h5>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 ">
          <div className="w-80">
            <img src={rocket} className="w-10 h-10 mb-3" alt="" />
            <h2 className="text-2xl font-semibold">Fastest Service</h2>
            <p className="text-[#5b5858] text-justify">
              Our delivery is automated, and it takes minutes if not seconds to
              fulfil orders.
            </p>
          </div>
          <div className="w-80">
            <img src={top} className="w-10 h-10 mb-3" alt="" />
            <h2 className="text-2xl font-semibold">Top Quality </h2>
            <p className="text-[#5b5858] text-justify">
              The highest quality top services on the market. We are working to
              make quality even more and keep low cost.
            </p>
          </div>

          <div className="w-80">
            <img src={support} className="w-10 h-10 mb-3" alt="" />
            <h2 className="text-2xl font-semibold">24/7 Support</h2>
            <p className="text-[#5b5858] text-justify">
              Support available around the clock, nothing like it in the market.
            </p>
          </div>
          <div className="w-80">
            <img src={box} className="w-10 h-10 mb-3" alt="" />
            <h2 className="text-2xl font-semibold">Customized Packages</h2>
            <p className="text-[#5b5858] text-justify">
              We understand that every social media strategy is unique. That's
              why we offer customized packages to meet your specific goals.
            </p>
          </div>
          <div className="w-80">
            <img src={graph} className="w-10 h-10 mb-3" alt="" />
            <h2 className="text-2xl font-semibold">Unleash Your Potential</h2>
            <p className="text-[#5b5858] text-justify">
              Take your social media game to the next level with our services.
              Unleash the full potential of your profiles.
            </p>
          </div>
          <div className="w-80">
            <img src={lock} className="w-10 h-10 mb-3" alt="" />
            <h2 className="text-2xl font-semibold">Safe & Secure </h2>
            <p className="text-[#5b5858] text-justify">
              Our services have consistently delivered real results. It's a safe
              and effective solution that works for everyone, just as it should.
              Your success is our mission.
            </p>
          </div>
        </div>
      </div>

      {/* section -3 marketing */}
      <div className="flex flex-col items-center mt-24">
        <div>
          <div className="flex flex-col gap-3  items-center">
            <h1 className="font-bold inline-block text-5xl">
              Achieve next-level growth
            </h1>
            <h1 className="inline-block font-bold text-5xl bg-gradient-to-r from-[#4B25EA] via-[#BD18E6] to-[#FB590E] bg-clip-text text-transparent">
              In just 3 simple steps
            </h1>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-7 mt-20">
            <div className=" border-2 border-slate-200 shadow-md rounded-md p-2 mt-16">
              <div className="flex items-center justify-center -my-10">
                <span className=" flex items-center justify-center bg-gradient-to-tr from-[#4B25EA] via-[#BD18E6] to-[#FB590E] rounded-lg text-xl text-white font-bold w-16 h-16">
                  1
                </span>
              </div>
              <div className="pt-12 text-center">
                <h1 className="font-semibold text-2xl">Choose Your Package</h1>
                <p className="pt-2 text-lg">
                  Explore our range and choose a package that aligns with your
                  social media aspirations. Skip logging in and get straight to
                  boosting your presence.
                </p>
              </div>
            </div>
            <div className="-mt-10">
              <div className=" border-2 border-slate-200 shadow-md rounded-md p-2 mt-16">
                <div className="flex items-center justify-center -my-10">
                  <span className=" flex items-center justify-center bg-gradient-to-tr from-[#4B25EA] via-[#BD18E6] to-[#FB590E] rounded-lg text-xl text-white font-bold w-16 h-16">
                    2
                  </span>
                </div>
                <div className="pt-12 text-center">
                  <h1 className="font-semibold text-2xl">
                    Choose Your Package
                  </h1>
                  <p className="pt-2 text-lg">
                    Explore our range and choose a package that aligns with your
                    social media aspirations. Skip logging in and get straight
                    to boosting your presence.
                  </p>
                </div>
              </div>
            </div>
            <div className=" border-2 border-slate-200 shadow-md rounded-md p-2 mt-16 ">
              <div className="flex items-center justify-center -my-10">
                <span className=" flex items-center justify-center bg-gradient-to-tr from-[#4B25EA] via-[#BD18E6] to-[#FB590E] rounded-lg text-xl text-white font-bold w-16 h-16">
                  3
                </span>
              </div>
              <div className="pt-12 text-center">
                <h1 className="font-semibold text-2xl">Choose Your Package</h1>
                <p className="pt-2 text-lg">
                  Explore our range and choose a package that aligns with your
                  social media aspirations. Skip logging in and get straight to
                  boosting your presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 themselves */}
      <div className="pt-32">
        <h1 className="font-semibold text-4xl underline text-center">
          The Numbers Speak for Themselves
        </h1>
      </div>
      <div className="mt-20 flex flex-col md:flex-row items-center gap-5 justify-between">
        <div className="bg-slate-900 text-white w-64 px-8 py-9 font-bold">
          <h2 className="text-2xl">21 K +</h2>
          <p>Happy Users</p>
        </div>
        <div className="bg-slate-900 text-white w-64 px-8 py-9 font-bold">
          <h2 className="text-2xl">21 K +</h2>
          <p>Happy Users</p>
        </div>
        <div className="bg-slate-900 text-white w-64 px-8 py-9 font-bold">
          <h2 className="text-2xl">21 K +</h2>
          <p>Happy Users</p>
        </div>
      </div>
      {/* section 5 get started */}
      <div className="mt-28">
        <div className="flex flex-col items-center justify-center font-bold ">
          <h1 className="inline-block text-xl bg-gradient-to-r from-[#4B25EA] via-[#BD18E6] to-[#FB590E] text-transparent bg-clip-text">
            Get started today
          </h1>
          <h2 className="inline-block text-3xl  text-center">
            Take the Next Step in Your Social Media Journey
          </h2>
        </div>
      </div>
      {/* section 6 */}
      <div className="mt-12 mb-12">
        <div className="flex items-center justify-center">
          <h1 className="bg-black px-20 py-3 inline-block rounded-md text-white font-bold text-xl">
            {" "}
            Choose Your Platform
          </h1>
        </div>
        <div className="flex justify-center flex-col md:flex-row items-center gap-4 md:gap-8 pt-6">
          <div className="flex gap-2 font-semibold">
            <img src={checkRight} alt="" />
            <h5>No Login Required</h5>
          </div>
          <div className="flex gap-2 font-semibold">
            <img src={checkRight} alt="" />
            <h5>Instant Impact</h5>
          </div>
          <div className="flex gap-2 font-semibold">
            <img src={checkRight} alt="" />
            <h5>Quality Guaranteed</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
