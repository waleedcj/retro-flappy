import { FiChevronDown } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { DexScreener, DexTools } from "../assets/SvgComponents";
import { toast } from "react-toastify";


import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          ref={buttonRef}
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 rounded-md text-white transition-colors"
        >
          <span className="font-medium text-sm">Socials</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          ref={dropdownRef}
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-slate-700 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
         <Option
            setOpen={setOpen}
            Icon={RiTwitterXFill}
            text="Twitter"
            link={import.meta.env.VITE_TWITTER_URL}
          />
          <Option
            setOpen={setOpen}
            Icon={FaTelegramPlane}
            text="Telegram"
            link={import.meta.env.VITE_TELEGRAM_URL}
          />
          <Option
            setOpen={setOpen}
            Icon={DexScreener}
            text="DexScreener"
            link={import.meta.env.VITE_DEXSCREENER_URL}
          />
          <Option
            setOpen={setOpen}
            Icon={DexTools}
            text="DexTools"
            link={import.meta.env.VITE_DEXTOOLS_URL}
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

interface OptionProps {
    text: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    link?: string;
  }
  
  const Option: React.FC<OptionProps> = ({ text, Icon, setOpen, link }) => {
    const handleClick = () => {
      setOpen(false);
      if (link) {
        window.open(link, "_blank", "noopener noreferrer");
      } else {
        toast.info(`You are very early!, link for ${text} is not available yet.`);
      }
    };
  
    return (
      <motion.li
        variants={itemVariants}
        onClick={handleClick}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-white hover:text-[#a855f7] transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon className="w-5 h-5" />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
