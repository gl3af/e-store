import Link from "next/link";

import Main from "@/components/main";
import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import {Button} from "@/components/ui/button";
const NoCart = () => {
  return (
    <Main>
      <Container>
        <section className="flex flex-col gap-6 justify-center items-center h-full text-center">
          <PageTitle title="Your cart is empty" />
          <p className="text-xl">Check out our products</p>
          <Button asChild size="lg">
            <Link href="/categories">Go to products</Link>
          </Button>
        </section>
      </Container>
    </Main>
  );
};

export default NoCart;