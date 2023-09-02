import {Menu} from "lucide-react";

import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

import {navigationLinks} from "@/mocks";
import NavigationLink from "@/components/navigation-link";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-2/3 sm:w-1/2">
        <aside className="py-12 px-4 flex justify-center items-center flex-col gap-6">
          <Logo />
          <div className="flex justify-center items-center flex-col gap-2">
            {
              navigationLinks.map(link => (
                <SheetClose asChild key={link.href}>
                  <NavigationLink href={link.href} label={link.label} />
                </SheetClose>
              ))
            }
          </div>
          <ThemeToggle />
        </aside>
      </SheetContent>
    </Sheet>

  );
};

export default Sidebar;