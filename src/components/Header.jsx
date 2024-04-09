import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
import { HiLogout, HiViewGrid } from "react-icons/hi";

export default function Header() {
  return (
    <Navbar fluid={true} rounded={true} className="border-b-2">
      <div className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Real State
        </span>
        Demo
      </div>

      {/* <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button> */}

      <div className="hidden lg:flex items-center gap-6  mr-6 font-medium">
        <div>
          <Dropdown label="PROPERTIES" inline>
            <Dropdown.Item >FEATURED LISTINGS</Dropdown.Item>
            <Dropdown.Item >PAST SALES</Dropdown.Item>
          </Dropdown>
        </div>
        <div>HOME SEARCH</div>
        <div>CONTACT US</div>
        <div>ABOUT US</div>
      </div>

      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar
            img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="avatar of Jese"
            rounded
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
      </Dropdown>
    </Navbar>
  );
}
