import { FaLinkedin, FaLock, FaPen } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

export default function Detail() {
  return (
    <>
      <div className="grid grid-cols-12 ml-8">
        <div className="col-span-6 bg-white my-5 p-3">
          <div className="flex flex-col gap-3 border-b-2 pb-5">
            <div className="flex justify-between items-center">
              <h1 className="font-roboto text-2xl">Details</h1>
              <FaPen />
            </div>
            <div>
              <h1 className="font-roboto">Industries</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="bg-[#E7F8F2] p-2 rounded-lg">Developer API's</h1>
              <h1 className="bg-[#E7F8F2] p-2 rounded-lg">Developer Tools</h1>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-roboto">Founded Date</h1>
                <h1 className="font-roboto">2009</h1>
              </div>
              <div>
                <h1 className="font-roboto">Founders</h1>
                <h1 className="font-bold">Brandon Kessler</h1>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-roboto">Operating Status</h1>
                <h1 className="font-roboto">Active</h1>
              </div>
              <div>
                <h1 className="font-roboto">Funding Type</h1>
                <h1 className="font-bold">Series B</h1>
              </div>
            </div>
            <div>
              <h1 className="font-roboto">Contact Email</h1>
              <h1 className="font-roboto">info@devpost.com</h1>
            </div>
            <div>
              <p>
                Devpost inspires software developers to build great software.
                They power the majority of virtual and in-person software
                competitions around the globe. Companies pay them to engage and
                market their tools to the world's developers. Their mission is
                rooted in the belief that technology and bring about important
                change and improve lives.
              </p>
            </div>
            <div className="flex gap-2">
              <FaSquareFacebook />
              <FaXTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex justify-between items-center">
              <h1 className="font-roboto text-2xl">
                Frequently Asked Questions
              </h1>
              <FaPen />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-roboto">
                Where is <strong>Devpost's</strong> headquarters?{" "}
                <strong>Devpost</strong> is located in <strong>New York</strong>
                , <strong>New York</strong>, <strong>United States</strong>.
              </h1>
              <h1 className="font-roboto">
                Who invested in <strong>Devpost</strong>?{" "}
                <strong>Devpost</strong> has <strong>8</strong> investors
                including <strong>Fantail Ventures</strong> and{" "}
                <strong>Betaworks</strong>.
              </h1>
              <div className="flex gap-1">
                <FaLock />
                <h1 className="font-roboto">
                  How much funding has <strong>Devpost</strong> raised to date?
                  <strong>Devpost</strong> has raised{" "}
                  <span className="blur-sm">12455</span>
                </h1>
              </div>
              <h1 className="font-roboto">
                When was the last funding round for <strong>Devpost</strong>?
                <strong>Devpost</strong> closed its last funding round on{" "}
                <strong>Feb 15, 2018</strong> from a <strong>Series B</strong>{" "}
                round.
              </h1>
              <h1 className="font-roboto">
                Who are <strong>Devpost's</strong> competitors? Alternatives and
                possible competitors to <strong>Devpost</strong> may include
                <strong>Reflect</strong>, <strong>Koji</strong>, and{" "}
                <strong>Origin Protocol</strong>.
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="border-2 border-blue-700 flex justify-around items-center gap-3 p-3">
                <FaLock color="blue" />
                <h1 className="font-roboto text-blue-700 text-lg">
                  Unlock for Free
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
