import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// how does gatsby know $id? Does it know to look in
// props.pageContext.id??
//
// Answer from docs:
// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

// (props) is from gatsby file system route api
// ({data}) is results from gatsby's page query
const BlogPost = ({ data }) => {
  const title = data.mdx.frontmatter.title;
  const heroImage = getImage(data.mdx.frontmatter.hero_image);
  const heroImageAlt = data.mdx.frontmatter.hero_image_alt;
  const body = data.mdx.body;

  return (
    <Layout pageTitle={title}>
      <GatsbyImage image={heroImage} alt={heroImageAlt}></GatsbyImage>
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPost;
