"use client";

import React from "react";
import Navbar from "./_components/landing-navbar";
import LandingHero from "./_components/landing-hero";
import Features from "./_components/landing-features";
import Pricing from "./_components/landing-pricing";
import Testimonial from "./_components/landing-testimonial";
import Footer from "./_components/landing-footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <Features />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

export default LandingPage;
