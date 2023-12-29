import { cn } from "@/utils";
import Logo from "@/assets/images/logo.svg";
import Button from "./Button";

const BigSideBar = () => {
  const sidebarcontainer = "bg-white min-h-screen w-64 -ml-64 transition duration-300 ease-out";
  const showsider = "ml-0";
  const showsidebar = false;
  return (
    <aside className={cn("hidden md:block shadow-shadow-4 overflow-hidden")}>
      <div
        className={
          showsidebar
            ? `${sidebarcontainer}`
            : `${sidebarcontainer} ${showsider} `
        }
      >
        <div className="content sticky top-0">
          <header className="h-20 flex items-center pl-10">
            <Button>
              <img
                src={Logo}
                alt="Nav-Logo"
                className={cn("w-28 h-12 md:h-16")}
              />
            </Button>
            <nav className="pt-8 flex flex-col">
              <Button className="flex items-center">
                logo
              </Button>
              <p>link</p>
            </nav>
          </header>
        </div>
      </div>
    </aside>
  );
};

export default BigSideBar;
