import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import macHeroScreenshotImageSrc from "images/company-1.svg";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { components } from "ComponentRenderer.js";
import Features from "components/features/ThreeColWithSideImage.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import Light, { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";

import heroScreenshotImageSrc from "images/budgeting.svg";
import logo from "images/logo1.svg";
import DashedBorderSixFeatures from "components/features/DashedBorderSixFeatures";
import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import ThreeColContactDetails from "components/cards/ThreeColContactDetails";
import GetStartedLight from "components/cta/GetStartedLight";
import FiveColumnWithInputForm from "components/footers/FiveColumnWithInputForm";
import { PrimaryButton } from "components/misc/Buttons";
import ContactUs from "pages/ContactUs";
import SimpleContactUs from "components/forms/SimpleContactUs";
import TwoColContactUsWithIllustrationFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm";

/* Hero */
const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;


const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const FeatureList = tw.ul`m-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;


export default ({
  features = null,
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "Supporting you & your growing business.",
  description = " provides financial guidance for businesses through planning and ongoing advisement. We also support individuals with personal accounting and tax needs. Our approach is focused on establishing relationships with our clients, so we have a vested interest in helping them achieve their strategic goals. "
}) => {

  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `Business Services.`,
    `Individual Services.`,
    `Valuation Services.`,
    `House rent/sale Services.`,
    `Car rent/sale Services.`,
    `Website/Mobile Application Services.`
  ];

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              Cakmak Consultancy
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
            <NavLink id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Services</NavLink>
              <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                      <a href="#team" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Team</a>
                    </li>
                    <li>
                      <a href="#office" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Offices</a>
                    </li>
                    {/* <li> */}
                      {/* <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dis</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> */}
                    {/* </li> */}
                  </ul>
              </div>
              <NavLink href="#about">
                About
              </NavLink>
              <NavLink href="#contact">
                Contact
              </NavLink>
            </div>
          </NavRow>
          <HeroRow className="hero-main">
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description><b>Cakmak Consultancy</b>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                   
                ))}
              </FeatureList>
              <a className="hero-button" href="#services" tw="hidden lg:block w-40 px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300">Get Details</a>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          <div id="services"><DashedBorderSixFeatures /></div>
          <ThreeColCenteredStatsPrimaryBackground />
          <div id="team"><ProfileThreeColGrid /></div>
          <div id="office"><ThreeColContactDetails /></div>
          <GetStartedLight />
          <FeatureWithSteps
            subheading={<Subheading>STEPS</Subheading>}
            heading={
              <>
                Easy to <HighlightedText>Discover.</HighlightedText>
              </>
            }
            textOnLeft={false}
            imageSrc={macHeroScreenshotImageSrc}
            imageDecoratorBlob={true}
            decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
          />
          <MainFeature2
            subheading={<Subheading>VALUES</Subheading>}
            heading={
              <>
                We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
              </>
            }
            imageSrc={prototypeIllustrationImageSrc}
            showDecoratorBlob={false}
            features={[
              {
                Icon: MoneyIcon,
                title: "Affordable",
                description: "We promise to offer you the best rate we can - at par with the industry standard.",
                iconContainerCss: tw`bg-green-300 text-green-800`
              },
              {
                Icon: BriefcaseIcon,
                title: "Professionalism",
                description: "We assure you that our templates are designed and created by professional designers.",
                iconContainerCss: tw`bg-red-300 text-red-800`
              }
            ]}
          />
        </Content2Xl>
        <div id="contact">
          <TwoColContactUsWithIllustrationFullForm />
        </div>
        <FiveColumnWithInputForm />
      </Container>
    </AnimationRevealPage>
  );
};
