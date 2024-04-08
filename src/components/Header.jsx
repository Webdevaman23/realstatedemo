import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <div className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Real State
        </span>
        Demo
      </div>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex justify-center gap-10 tex-lg font-semibold">
        <div >Home</div>
        <div >Properties</div>
        <div >Contact Us</div>
        <div >About Us</div>
      </div>
      <Avatar img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="avatar of Jese" rounded />
     
    </Navbar>
  );
}
