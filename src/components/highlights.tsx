import { FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Highlights() {
  return (
    <>
      <div className="bg-white">
        <div className="grid grid-cols-12 py-6 ml-8">
          <div className="col-span-6 py-4 mr-8">
            <div className="flex flex-col gap-3 px-2">
              <h1 className="font-roboto text-3xl py-2">Highlights</h1>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col border-4 shadow-inherit p-2">
                    <h2 className="text-md">Funding Rounds</h2>
                    <div className="flex justify-between">
                      <h2 className="text-md"></h2>
                      <IoIosArrowForward />
                    </div>
                    <h2 className="text-[#1C6FFF] text-xl">3</h2>
                  </div>
                  <div className="flex flex-col border-4 shadow-inherit p-2">
                    <div className="flex items-center gap-1">
                      <FaLock color="blue" />
                      <h2 className="text-md">Total Funding</h2>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="ml-4 text-md">Amount</h2>
                      <IoIosArrowForward />
                    </div>
                    <h2 className="text-[#1C6FFF] text-lg">Unlock for Free</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col border-4 shadow-inherit p-2">
                    <h2 className="text-md">Lead Investors</h2>
                    <div className="flex justify-between">
                      <h2 className="text-md"></h2>
                      <IoIosArrowForward />
                    </div>
                    <h2 className="text-[#1C6FFF] text-xl">1</h2>
                  </div>
                  <div className="flex flex-col border-4 shadow-inherit p-2">
                    <h2 className="text-md">Investors</h2>
                    <div className="flex justify-between">
                      <h2 className="text-md"></h2>
                      <IoIosArrowForward />
                    </div>
                    <h2 className="text-[#1C6FFF] text-xl">8</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 border-l-2 py-4 ml-14">
            <div className="flex flex-col gap-3 px-2">
              <h1 className="font-roboto text-3xl py-2">Fundings</h1>
              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <FaLock size={28} />
                  <h1>
                    <strong>Devpost</strong> has raised a total of{" "}
                    <span className="blur-sm">$10.5M</span> in funding over{" "}
                    <strong>3</strong>
                    rounds. Their latest funding was raised on{" "}
                    <strong>Feb 15, 2018</strong> from a{" "}
                    <strong>Series B</strong> round.
                  </h1>
                </div>
                <div>
                  <h1>
                    <strong>Devpost</strong> is funded by <strong>8</strong>{" "}
                    investors. <strong>Fantail Ventures</strong> and{" "}
                    <strong>Betaworks</strong>
                    are the most recent investors.
                  </h1>
                </div>
                <div className="flex justify-center border-2 border-blue-500">
                  <div className="flex gap-2">
                    <FaLock color="blue" size={20} className="mt-1" />
                    <h1 className="font-roboto text-blue-800 text-lg">
                      UNLOCK FOR FREE
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
