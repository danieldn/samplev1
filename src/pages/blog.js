import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const blogTitles = data.allFile.nodes.map((node) => (
    <li key={node.name}>{node.name}</li>
  ));

  return (
    <Layout pageTitle="Blog">
      My Blogs:
      <ul>{blogTitles}</ul>
    </Layout>
  );
};

export default BlogPage;
