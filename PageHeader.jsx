import { Link, useNavigate } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, BookmarkIcon, PhoneIcon, CameraIcon, Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSelectUserType = (userType) => {
    navigate(`/login?type=${userType}`);
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // To close the menu when clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header shadow-2xl sticky top-0 flex flex-row font-sans md:text-lg text-gray-200 p-7 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-blue-100 text-xl md:text-2xl xl:text-4xl font-bold font-serif italic">
          Header <em className="text-blue-500">of</em> My Page
        </h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Off-canvas mobile menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className={`fixed inset-y-0 top-20 right-0 transform transition-transform duration-300 bg-gray-800 w-80 z-40 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden bg-opacity-80`}
          >
            <nav className="flex flex-col space-y-4 py-10">
              <Link to="/home" className="flex items-center py-3 px-10 hover:bg-gray-800 text-white">
                <HomeIcon className="h-5 w-5 mr-1" /> Home
              </Link>
              <Link to="/page1" className="flex items-center py-3 px-10 hover:bg-gray-800 text-white">
                <BookOpenIcon className="h-5 w-5 mr-1" /> Page1
              </Link>
              <Link to="/library" className="flex items-center py-3 px-10 hover:bg-gray-800 text-white">
                <BookmarkIcon className="h-5 w-5 mr-1" /> Library
              </Link>
              <Link to="/gallery" className="flex items-center py-3 px-10 hover:bg-gray-800 text-white">
                <CameraIcon className="h-5 w-5 mr-1" /> Gallery
              </Link>
              <Link to="/contact" className="flex items-center py-3 px-10 hover:bg-gray-800 text-white">
                <PhoneIcon className="h-5 w-5 mr-1" /> Contact Us
              </Link>
              <div ref={dropdownRef} className="relative">
                <button onClick={toggleDropdown} className="flex items-center py-3 px-10 hover:bg-gray-800 text-white w-full text-left">
                  <span className="font-serif italic flex items-center mr-3">
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />Login
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-700 shadow-lg rounded-md py-1 z-20">
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-900 hover:text-gray-100" onClick={() => handleSelectUserType('User')}>
                    User1
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-900 hover:text-gray-100" onClick={() => handleSelectUserType('Member')}>
                    User2
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-900 hover:text-gray-100" onClick={() => handleSelectUserType('Admin1')}>
                    Admin 1
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-900 hover:text-gray-100" onClick={() => handleSelectUserType('Admin2')}>
                    Admin 2
                  </button>
                </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop menu */}
      <nav className="hidden lg:flex md:flex-row space-x-2">
        <Link to="/home" className="flex items-center px-2 py-1 hover:bg-gray-900 rounded-xl">
          <HomeIcon className="h-5 w-5 mr-1" /> Home
        </Link>
        <Link to="/page1" className="flex items-center px-2 py-1 hover:bg-gray-900 rounded-xl">
          <BookOpenIcon className="h-5 w-5 mr-1" /> Page1
        </Link>
        <Link to="/library" className="flex items-center px-2 py-1 hover:bg-gray-900 rounded-xl">
          <BookmarkIcon className="h-5 w-5 mr-1" /> Library
        </Link>
        <Link to="/gallery" className="flex items-center px-2 py-1 hover:bg-gray-900 rounded-xl">
          <CameraIcon className="h-5 w-5 mr-1" /> Gallery
        </Link>
        <Link to="/contact" className="flex items-center px-2 py-1 hover:bg-gray-900 rounded-xl">
          <PhoneIcon className="h-5 w-5 mr-1" /> Contact
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center px-2 py-1 bg-blue-400 hover:bg-blue-500 rounded-xl">
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" /> Login
          </button>
          {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 shadow-lg rounded-md py-1 z-20">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-900" onClick={() => handleSelectUserType('User')}>
                  User1
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-900" onClick={() => handleSelectUserType('Member')}>
                  User2
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-900" onClick={() => handleSelectUserType('Admin1')}>
                  Admin 1
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-900" onClick={() => handleSelectUserType('Admin2')}>
                  Admin 2
                </button>
              </div>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
