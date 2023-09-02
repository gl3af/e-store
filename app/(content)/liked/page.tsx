"use client";

import {useAppSelector} from "@/store/hooks";
import {useLiked} from "@/lib/hooks/useLiked";

import Main from "@/components/main";
import Container from "@/components/container";
import NoLiked from "@/components/no-liked";
import PageTitle from "@/components/page-title";
import ProductList from "@/components/product-list";

const Page = () => {
  useLiked();
  const liked = useAppSelector(state => state.liked.liked);

  if (!liked.length) return <NoLiked />

  return (
    <Main>
      <Container>
        <div className="flex flex-col gap-4">
          <PageTitle title="Your favorites" />
          <ProductList products={liked} />
        </div>
      </Container>
    </Main>
  );
};

export default Page;