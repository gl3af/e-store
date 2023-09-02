import Link from "next/link";
import Image from "next/image";

import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import Main from "@/components/main";
import {Button} from "@/components/ui/button";

export default async function Home() {
  return (
    <Main>
      <Container>
        <section className="flex flex-col gap-6 justify-center items-center h-[calc(100vh-72px)] text-center">
          <PageTitle title="Your favorite digital store" />
          {/*<h1 className="text-2xl font-bold text-center">Your favorite digital store</h1>*/}
          <Button asChild size="lg">
            <Link href="/categories">Go to products</Link>
          </Button>
        </section>
        <section
          id="about"
          className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] md:grid-cols-2 gap-10 text-center"
        >
          <div className="relative aspect-square">
          <Image
            fill
            src="/about.png"
            alt="About us"
          />
          </div>
          <div className="flex flex-col gap-4 justify-start items-center text-center sm:text-left">
            <h2 className="text-3xl font-bold">About us</h2>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dicta, dignissimos doloremque dolorum
              esse eum ex illo illum, ipsam nihil quidem quisquam quos repellat repellendus rerum sint tempore ullam.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque ipsam iste modi non nostrum
              nulla sint soluta, veritatis voluptatem! Beatae facere inventore ipsam iste veniam veritatis voluptatem!
              Error, quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi asperiores consequuntur
              debitis ex explicabo fugiat, id incidunt, itaque iusto magnam minima nam officia sapiente, vero.
              Libero necessitatibus qui voluptas?
            </p>
          </div>
        </section>
        <section
          id="contacts"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center py-12"
        >
          <div className="flex flex-col gap-4 justify-start items-center text-center sm:text-left">
            <h2 className="text-3xl font-bold">Contacts</h2>
            <div className="w-full flex flex-col gap-4 text-left">
              <h3 className="text-2xl font-bold">Address</h3>
              <p className="text-xl font-light">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="w-full flex flex-col gap-4 text-left">
              <h3 className="text-2xl font-bold">Working hours</h3>
              <p className="text-xl font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque aut, error fuga fugiat laudantium
                quo ullam. Atque, recusandae veritatis.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 text-left">
              <h3 className="text-2xl font-bold">Contact info</h3>
              <p className="text-xl font-light">Lorem ipsum dolor sit amet.</p>
              <p className="text-xl font-light">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        <div className="relative">
          <Image
            fill
            src="/map.png"
            alt="About us"
          />
        </div>
        </section>
      </Container>
    </Main>
  )
}
