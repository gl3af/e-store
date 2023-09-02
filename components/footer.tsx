import Container from "@/components/container";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

const Footer = () => {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;