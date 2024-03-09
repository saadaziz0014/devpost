import { FaLinkedin, FaLock, FaPen } from "react-icons/fa";
import { FaBoltLightning, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { IoBarChart } from "react-icons/io5";

export default function FundingDetail() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-5 bg-white my-5 p-3">
          <div className="flex flex-col gap-3 pb-5">
            <div className="flex justify-between items-center">
              <h1 className="font-roboto text-3xl">Funding Rounds</h1>
              <FaPen />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <h1 className="roboto">Number of Funding</h1>
                <h1 className="roboto">Rounds</h1>
                <h1 className="roboto text-xl">3</h1>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <FaLock />
                  <h1>Total Funding Amount</h1>
                </div>
                <h1 className="font-roboto text-blue-800 text-xl">
                  Unlock for free
                </h1>
              </div>
            </div>
            <div className="flex item-center gap-2">
              <FaLock size={28} />
              <h1 className="font-roboto">
                <strong>Devpost</strong> has raised a total of{" "}
                <span className="blur-sm">$10.5M</span> in funding over{" "}
                <strong>3</strong>
                rounds. Their latest funding was raised on{" "}
                <strong>Feb 15, 2018</strong> from a <strong>Series B</strong>{" "}
                round.
              </h1>
            </div>
            <div className="border-4 p-4">
              <div className="grid grid-cols-2">
                <div className="flex justify-start">
                  <div className="flex gap-1">
                    <IoBarChart color="blue" size={24} />
                    <h1 className="font-roboto">
                      Which funding types raised the most money?
                    </h1>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex gap-2">
                    <FaBoltLightning color="#F6B548" />
                    <h1 className="font-roboto text-lg">SHOW</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-4 p-4">
              <div className="grid grid-cols-2">
                <div className="flex justify-start">
                  <div className="flex gap-1">
                    <IoBarChart color="blue" size={24} />
                    <h1 className="font-roboto">
                      How much funding has this organization raised over time?
                    </h1>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex gap-2">
                    <FaBoltLightning color="#F6B548" />
                    <h1 className="font-roboto text-lg">SHOW</h1>
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
