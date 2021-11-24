import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// export const query = graphql`
//   {
//     allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
//       nodes {
//         name
//       }
//     }
//   }
// `;

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, Y")
          title
        }
        id
        body
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.nodes.map((node) => (
    <article key={node.id}>
      <h1>{node.frontmatter.title}</h1>
      <p>Posted: {node.frontmatter.date}</p>
      <MDXRenderer>{node.body}</MDXRenderer>
    </article>
  ));

  return <Layout pageTitle="My Blog Posts">{blogs}</Layout>;
};

export default BlogPage;
