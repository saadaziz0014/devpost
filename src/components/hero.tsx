import { FaGlobeAmericas, FaLock, FaRegNewspaper } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImNewTab } from "react-icons/im";
import { IoIosArrowForward, IoIosFlag } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import { LuDollarSign, LuDot } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";

export default function Hero() {
  return (
    <>
      <div className="bg-white">
        <div className="grid grid-cols-12 py-6">
          <div className="col-span-2"></div>
          <div className="col-span-3 py-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-roboto text-3xl py-2">About</h1>
              <p>Software Platform and Community for world's Hackathon</p>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <h2>New York, New York, United States</h2>
                </div>
                <div className="flex items-center gap-1">
                  <MdPeopleAlt />
                  <h2>11 - 50</h2>
                </div>
                <div className="flex items-center gap-1">
                  <LuDollarSign />
                  <h2>Series B</h2>
                </div>
                <div className="flex items-center gap-1">
                  <IoIosFlag />
                  <h2>Private</h2>
                </div>
                <div className="flex items-center gap-1">
                  <FaGlobeAmericas />
                  <h2>devpost.com/</h2>
                  <ImNewTab />
                </div>
                <div className="flex items-center gap-1">
                  <IoBarChart />
                  <h2>27,369</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 border-l-4 py-4">
            <div className="flex flex-col gap-3 px-2">
              <h1 className="font-roboto text-3xl py-2">Highlights</h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col border-4 shadow-inherit p-2">
                  <div className="flex items-center gap-1">
                    <FaLock />
                    <h2 className="text-md">Total Funding</h2>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="ml-4 text-md">Amount</h2>
                    <IoIosArrowForward />
                  </div>
                  <h2 className="text-blue-800 text-lg">Unlock for Free</h2>
                </div>
                <div className="flex flex-col border-4 shadow-inherit p-2">
                  <h2 className="text-md">Employee</h2>
                  <div className="flex justify-between">
                    <h2 className="text-md">Profiles</h2>
                    <IoIosArrowForward />
                  </div>
                  <h2 className="text-blue-800 text-lg">1</h2>
                </div>
                <div className="flex flex-col border-4 shadow-inherit p-2">
                  <h2 className="text-md">Similar</h2>
                  <div className="flex justify-between">
                    <h2 className="text-md">Companies</h2>
                    <IoIosArrowForward />
                  </div>
                  <h2 className="text-blue-800 text-lg">5</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 border-l-4 py-4">
            <div className="flex flex-col gap-3 px-2">
              <h1 className="font-roboto text-3xl py-2">
                Recent News & Activity
              </h1>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                  <FaRegNewspaper />
                  <h2 className="font-roboto">News</h2>
                  <LuDot />
                  <h2 className="font-roboto">Jan 20, 2024</h2>
                </div>
              </div>
              <div className="border-b-2">
                <p className="font-light inline">hackernoon.com - </p>
                <a href="#">
                  <h2 className="inline py-2">
                    https://hackernoon.com/build-a-blockchain-application-for-the-hackonlisk-online-hackathon-i87536cn
                  </h2>
                </a>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                  <FaRegNewspaper />
                  <h2 className="font-roboto">News</h2>
                  <LuDot />
                  <h2 className="font-roboto">Oct 7, 2020</h2>
                </div>
              </div>
              <div className="border-b-2">
                <p className="font-light inline">Voicebot.ai - </p>
                <a href="#">
                  <h2 className="inline">
                    https://voicebot.ai/2020/10/07/amazon-selects-10000-alexa-conversations-skills-challenge-finalists/
                  </h2>
                </a>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                  <FaRegNewspaper />
                  <h2 className="font-roboto">News</h2>
                  <LuDot />
                  <h2 className="font-roboto">Sep 10, 2018</h2>
                </div>
              </div>
              <div>
                <p className="font-light inline">Mobile Syrup - </p>
                <a href="#">
                  <h2 className="inline">
                    https://mobilesyrup.com/2018/09/10/cannabis-hackathon-canada-history/
                  </h2>
                </a>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <h3 className="text-blue-600">View All</h3>
                  <IoIosArrowForward color="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
