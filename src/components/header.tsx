import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-12 bg-[#183444]">
        <div className="col-span-4 p-3">
          <div className="flex gap-3 relative">
            <h1 className="text-white font-roboto text-3xl">crunchbase</h1>
            <IoIosSearch className="absolute left-[42%] top-[13%]" size={28} />
            <input
              type="text"
              placeholder="Search Crunchbase"
              className="pl-6"
            />
            <hr className="absolute w-28 border-black left-44 top-8" />
          </div>
          <hr className="w-56 mt-2" />
        </div>
      </div>
    </>
  );
}
