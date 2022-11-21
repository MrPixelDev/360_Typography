import React from "react";
import { MarginBanner } from "../components/banners/MarginBanner";
import { AdProd1 } from "../components/ad_prod/AdProd1";
import { AdProd2 } from "../components/ad_prod/AdProd2";
import { AdProd3 } from "../components/ad_prod/AdProd3";
import { AdProd4 } from "../components/ad_prod/AdProd4";
import { AboutP } from "../components/AboutP";
import { Banner1 } from "../components/banners/Banner1";
import { Banner2 } from "../components/banners/Banner2";
import { CustomersContainer } from "../components/CustomersContainer";
import { FeedbackContainer } from "../components/FeedbackContainer";
import { MapContainer } from "../components/MapContainer";
import { Separator } from "../components/Separator";

export const IndexPage = () => {
  return (
    <>
      <AdProd1 />
      <AdProd2 />
      <Separator />
      <AboutP />
      <Separator />
      <AdProd3 />
      <MarginBanner />
      <Banner1 />
      <MarginBanner />
      <CustomersContainer />
      <MarginBanner />
      <Banner2 />
      <MarginBanner />
      <AdProd4 />
      <MarginBanner />
      <FeedbackContainer />
      <MarginBanner />
      <Separator />
      <MapContainer />
      <MarginBanner />
    </>
  );
};
