import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { ModeToggle } from "./mode-toggle"
  import { useLocation } from "react-router-dom"
  
const Header = () => {

  const {pathname} = useLocation();

  console.log(pathname);
  
  return (
    <div className="sticky top-0 h-[20vh] z-10">
    <h2 className={`bg-gray-100 dark:bg-[#121212] ${pathname==='/signup' ? '':'bg-[url(./assets/navbar.jpg)] dark:bg-[url(./assets/darknavbar.jpg)]'} bg-no-repeat bg-top bg-cover px-8 py-2 lobster-regular text-5xl text-center`}>Vag.</h2>
    {/* Navbar */}
    <header className="flex max-sm:justify-end justify-between items-center py-4 px-8 bg-white dark:bg-[#1E1E1E] shadow-md">
      <h1 className="text-2xl font-bold max-sm:hidden">Virtual Art Gallery</h1>
    <Menubar className="bg-inherit shadow-none border-none rounded-none">
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-inherit hover:bg-gray-100">Login</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="text-nowrap data-[state=open]:bg-inherit hover:bg-gray-100">Sign Up</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <ModeToggle />
      </MenubarMenu>
    </Menubar>
    </header>
    </div>
  )
}

export default Header