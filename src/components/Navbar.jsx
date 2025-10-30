import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>

      <div className="flex gap-2 items-center relative">
        <input 
          type="text" 
          placeholder="Search" 
          className="input input-bordered w-24 md:w-auto" 
        />

        {user && (
          <div className="flex items-center relative">
            <p className="px-4">Welcome, {user.firstName}</p>

            {/* Avatar Button */}
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar peer">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photourl} />
              </div>
            </div>

            {/* Dropdown Menu */}
            <ul className="
              hidden peer-focus:block peer-hover:block 
              absolute top-12 right-0 
              menu menu-sm bg-base-100 rounded-box 
              w-52 p-2 shadow z-[9999]"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
