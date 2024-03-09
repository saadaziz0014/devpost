import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-12 bg-[#183444]">
        <div className="col-span-4 p-3">
          <div className="flex justify-between relative">
            <h1 className="text-white font-roboto text-3xl">crunchbase</h1>
            <IoIosSearch className="absolute left-44 top-3" size={20} />
            <input
              type="text"
              placeholder="Search Crunchbase"
              className="px-4 pl-14 py-2"
            />
            <hr className="absolute w-28 border-black left-44 top-8" />
          </div>
          <hr className="w-56 mt-2" />
        </div>
      </div>
    </>
  );
}
