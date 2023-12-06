import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(function () {
    function stickNav() {
      window.scrollY > 150 ? setStickyNav(true) : setStickyNav(false);
    }

    window.addEventListener("scroll", stickNav);

    return () => window.removeEventListener("scroll", stickNav);
  }, []);

  useEffect(
    function () {
      if (isNavOpen || isSidebarOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "visible";
    },
    [isNavOpen, isSidebarOpen],
  );

  function handleToggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <nav
        className={`${
          stickyNav ? "sticky top-0 bg-gray-600" : "relative"
        } z-50 flex items-center justify-between gap-4 px-8 py-5`}
      >
        <Logo />

        <NavLinks styles="3xl:flex hidden gap-6 font-medium text-white" />

        <NavButtons
          onToggleNav={handleToggleNav}
          onToggleSidebar={handleToggleSidebar}
        />
      </nav>

      <MobileNav isNavOpen={isNavOpen} onToggleNav={handleToggleNav} />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleToggleSidebar={handleToggleSidebar}
      />
    </>
  );
}

export default Navigation;
