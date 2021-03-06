import React from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "@features/attachedPosts";
import { News } from "@features/news";
import { HomeTemplate } from "@shared/templates";

export function HomePage() {
  return (
    <HomeTemplate carousel={<Carousel />}>
      <Helmet title="Home" />

      <News />
    </HomeTemplate>
  );
}
