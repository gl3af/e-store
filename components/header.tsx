import Container from "@/components/container";
import NavigationLink from "@/components/navigation-link";
import Logo from "@/components/logo";
import CartLink from "@/components/cart-link";
import Sidebar from "@/components/sidebar";

import {navigationLinks} from "@/mocks";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Sidebar />
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex gap-2 md:gap-4 items-center">
              {
                navigationLinks.map(link => (
                  <li key={link.href}>
                    <NavigationLink href={link.href} label={link.label} />
                  </li>
                ))
              }
            </ul>
          </nav>
          <CartLink />
        </div>
      </Container>
    </header>
  );
}