import Link from "next/link";

import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import {Button} from "@/components/ui/button";
import Main from "@/components/main";

const NoLiked = () => {
  return (
    <Main>
      <Container>
        <section className="flex flex-col gap-6 justify-center items-center h-full text-center">
          <PageTitle title="It's empty here..." />
          <p className="text-xl">Check out our products to find your favorites</p>
          <Button asChild size="lg">
            <Link href="/categories">Go to products</Link>
          </Button>
        </section>
      </Container>
    </Main>
  );
};

export default NoLiked;