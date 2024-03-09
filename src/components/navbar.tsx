import { GoOrganization } from "react-icons/go";
import logo from "../assets/logo.jpg";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <div className="grid grid-cols-12 my-8">
        <div className="col-span-2"></div>
        <div className="col-span-2">
          <img src={logo} />
        </div>
        <div className="col-span-7">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <GoOrganization />
              <h6 className="font-extralight">ORGANIZATION</h6>
            </div>
            <div>
              <div className="flex justify-start">
                <h1 className="font-roboto text-4xl">Devpost</h1>
              </div>
              <div className="flex justify-end items-center">
                <div className="relative">
                  <CiCirclePlus className="absolute text-white left-1 top-2" />
                  <button className="bg-[#146AFF] text-white font-roboto py-1 px-6">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between absolute top-64">
              <Link to="/">
                <h1
                  className={`font-semibold text-lg ${
                    location.pathname == "/" &&
                    `semibold text-lg bg-white shadow-inherit p-3`
                  } p-3`}
                >
                  Summary
                </h1>
              </Link>
              <Link to="/roadmap">
                <h1
                  className={`font-semibold text-lg ${
                    location.pathname == "/roadmap" &&
                    `semibold text-lg bg-white shadow-inherit p-3`
                  } p-3`}
                >
                  Financials
                </h1>
              </Link>
              <h1 className="font-semibold text-lg p-3">People</h1>
              <h1 className="font-semibold text-lg p-3">Technology</h1>
              <h1 className="font-semibold text-lg p-3">Signal & News</h1>
              <h1 className="font-semibold text-lg p-3">Similar Companies</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
