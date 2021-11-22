import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>iI'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg"
        alt="a puppy"
      ></StaticImage>
    </Layout>
  );
};
export default IndexPage;
