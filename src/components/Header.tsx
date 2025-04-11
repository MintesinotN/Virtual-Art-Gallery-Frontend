import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "./mode-toggle";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import { StoreContextType } from "@/types/data.types";

const Header = () => {
  const { setSelectedRole } = useContext(StoreContext) as StoreContextType;

  const { pathname } = useLocation();

  const isSignUpPage = pathname.includes("/signup");

  console.log(pathname);

  return (
    <>
      <div className="z-10">
        <h2
          className={`bg-gray-100 dark:bg-[#121212] ${
            pathname === "/signup"
              ? ""
              : "bg-[url(./assets/navbar.jpg)] dark:bg-[url(./assets/darknavbar.jpg)]"
          } bg-no-repeat bg-top bg-cover px-8 py-2 lobster-regular text-5xl text-center`}
        >
          Vag.
        </h2>
      </div>

      {/* Navbar */}
      <header className="mb-2 z-50 sticky top-0 flex max-sm:justify-end justify-between items-center py-4 px-8 bg-white dark:bg-[#1E1E1E] shadow-md">
        <h1 className="text-2xl font-bold max-sm:hidden">
          Virtual Art Gallery
        </h1>
        <Menubar className="bg-inherit shadow-none border-none rounded-none">
          {isSignUpPage ? (
            <Select defaultValue="user" onValueChange={setSelectedRole}>
              <SelectTrigger className="w-22">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="artist">Artist</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : null}
          <MenubarMenu>
            <ModeToggle />
          </MenubarMenu>
        </Menubar>
      </header>
    </>
  );
};

export default Header;
