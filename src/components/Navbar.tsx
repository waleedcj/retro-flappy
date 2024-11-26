import { useState, useEffect } from 'react';
import Birdy from '../assets/bird.o.webp';
import { StaggeredDropDown } from '../ui';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onGameClick: () => void;
  onScoreboardClick?: () => void;
  onRoadmapClick: () => void;
  onAboutClick: () => void;
  navbarRef: React.RefObject<HTMLDivElement>;
}

const BUY_URL = import.meta.env.VITE_BUY_URL;

export default function Navbar({
  //   onHomeClick,
  onGameClick,
//   onScoreboardClick,
  onRoadmapClick,
  onAboutClick,
  navbarRef
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const handleBuyClick = () => {
    if (BUY_URL) {
      window.open(BUY_URL, "_blank", "noopener noreferrer");
    } else {
      toast("if you see this you are early! 😉 Use the contract address for now.");
    }
  };

  
  // Animation Variants
  const sidebarVariants = {
    hidden: {
      x: '-100%',
      transition: {
        type: 'tween',
        stiffness: 100,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        stiffness: 100,
        when: 'beforeChildren',
        staggerChildren: 0.1, // Stagger the menu items
      },
    },
    exit: {
      x: '-100%',
      transition: {
        type: 'tween',
        stiffness: 100,
        when: 'afterChildren',
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <header ref={navbarRef} className="sticky top-0 z-10">
      {/* Main Navigation Bar */}
      <nav className="bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-8">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            // onClick={onHomeClick}
          >
            <img src={Birdy} className="h-32 w-32 absolute" alt="Logo" />
          </a>
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            type="button"
            className="inline-flex items-center bg-inherit p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden w-full md:block md:w-auto" id="desktop-menu">
            <ul className="font-medium flex flex-row space-x-5">
              <li>
                <button
                  onClick={onGameClick}
                  className="py-2 px-3 text-white hover:text-[#a855f7]"
                >
                  Game
                </button>
              </li>
              {/* <li>
                <button
                  onClick={onScoreboardClick}
                  className="py-2 px-3 text-white hover:text-[#a855f7]"
                >
                  Score
                </button>
              </li> */}
              <li>
                <button
                  onClick={onRoadmapClick}
                  className="py-2 px-3  text-white hover:text-[#a855f7]"
                >
                  Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={onAboutClick}
                  className="py-2 px-3 text-white hover:text-[#a855f7]"
                >
                  About
                </button>
              </li>
              <StaggeredDropDown />
              <li>
                <button
                  onClick={() =>
                    handleBuyClick()
                  }
                  className="py-2 px-3 text-white hover:text-[#a855f7] bg-slate-700"
                >
                  Buy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            ></motion.div>

            {/* Sidebar */}
            <motion.div
              className="fixed inset-y-0 left-0 w-64 bg-gray-800 shadow-lg z-50"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 bg-inherit  text-gray-400 hover:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                &times;
              </button>
              {/* Menu Items */}
              <nav className="mt-8">
                <motion.ul className="space-y-4">
                  <motion.li variants={menuItemVariants}>
                    <button
                      onClick={() => {
                        onGameClick();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-6 py-2 bg-inherit text-white hover:text-[#a855f7]"
                    >
                      Game
                    </button>
                  </motion.li>
                  <motion.li variants={menuItemVariants}>
                    <button
                      onClick={() => {
                        onRoadmapClick();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-6 py-2 bg-inherit text-white hover:text-[#a855f7]"
                    >
                      Roadmap
                    </button>
                  </motion.li>
                  <motion.li variants={menuItemVariants}>
                    <button
                      onClick={() => {
                        onAboutClick();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-6 py-2 bg-inherit text-white hover:text-[#a855f7]"
                    >
                      About
                    </button>
                  </motion.li>
                  <motion.li variants={menuItemVariants}>
                    <button
                       onClick={() =>
                        handleBuyClick()
                      }
                      className="block w-full text-left px-6 py-2 bg-inherit text-white hover:text-[#a855f7]"
                    >
                      Buy
                    </button>
                  </motion.li>
                </motion.ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
