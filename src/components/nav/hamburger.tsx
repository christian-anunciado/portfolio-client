import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { LineMdCoffeeLoop } from "../../assets/icons/tsx/CoffeeReact.tsx";
import { GitHub } from "../../assets/icons/tsx/GithubReact.tsx";
import { Gmail } from "../../assets/icons/tsx/GmailReact.tsx";
import { LineMdLaptop } from "../../assets/icons/tsx/LaptopReact.tsx";
import { LinkedIn } from "../../assets/icons/tsx/LinkedInReact.tsx";
import { LineMdPerson } from "../../assets/icons/tsx/PersonReact.tsx";
import { PointingDown } from "../../assets/icons/tsx/PointingDownReact.tsx";
import { CONTACT_LINKS, NAV_LINKS } from "../../shared/constants";
import { BackgroundBeams } from "../tsx/background-beams.tsx";

type Props = {};

function Hamburger({}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="block md:hidden">
      {/* MENU BUTTON */}
      <button
        className="relative z-50 flex h-6 w-7 flex-col justify-between"
        onClick={() => setOpen((prev) => !prev)}
        title="Open Menu"
      >
        <motion.div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className="h-1 w-7 origin-left rounded bg-slate-50"
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={open ? "opened" : "closed"}
          className="h-1 w-7 rounded bg-slate-50"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={open ? "opened" : "closed"}
          className="h-1 w-7 origin-left rounded bg-slate-50"
        ></motion.div>
      </button>
      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="fixed left-0 top-0 z-40 flex h-[100svh] w-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-950 pb-10 text-4xl text-white"
        >
          <div className="z-50 flex flex-1 flex-col items-center justify-center gap-10">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.label}
              >
                <a
                  href={link.href}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  {index === 0 && <LineMdCoffeeLoop className="h-7 w-7" />}

                  {index === 1 && <LineMdPerson className="h-7 w-7" />}

                  {index === 2 && <LineMdLaptop className="h-7 w-7" />}
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div variants={listItemVariants} className="z-50 mt-auto">
            <span className="text-xl underline underline-offset-4">
              Contact Me <PointingDown className="inline-flex h-7 w-7" />
            </span>

            <div className="mt-2 flex items-center justify-around">
              <a href={`mailto: ${CONTACT_LINKS.email}`} title="Email Me">
                <Gmail className="h-7 w-7" />
              </a>
              <a href={CONTACT_LINKS.github} title="Github">
                <GitHub className="h-7 w-7" />
              </a>
              <a href={CONTACT_LINKS.linkedin} title="Linkedin">
                <LinkedIn className="h-7 w-7" />
              </a>
            </div>
          </motion.div>
          <BackgroundBeams />
        </motion.div>
      )}
    </div>
  );
}

export default Hamburger;
