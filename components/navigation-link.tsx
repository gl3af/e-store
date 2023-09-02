import Link from "next/link";

type NavigationLinkProps = {
  href: string;
  label: string;
}

const NavigationLink = ({href, label}: NavigationLinkProps) => {
  return (
    <Link
      href={href}
      className="hover:text-primary text-lg font-light px-4 py-2"
    >
      {label}
    </Link>
  );
};

export default NavigationLink;