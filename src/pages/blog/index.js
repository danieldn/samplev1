import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import slugify from "@sindresorhus/slugify";

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, Y")
          title
        }
        id
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.nodes.map((node) => (
    <article key={node.id}>
      <h2>
        {/* why <a> slower than <Link>? */}
        {/* answer: preloading */}
        {/* <a href={`/blog/${slugify(node.frontmatter.title)}/`}>
          {node.frontmatter.title}
        </a> */}
        <Link to={`/blog/${slugify(node.frontmatter.title)}`}>
          {node.frontmatter.title}
        </Link>
      </h2>
      <p>Posted: {node.frontmatter.date}</p>
    </article>
  ));

  return <Layout pageTitle="My Blog Posts">{blogs}</Layout>;
};

export default BlogPage;
