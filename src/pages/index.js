import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Template = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 text-center -skew-y-0">
      <Link to={url} className="text-2xl">
        <div className="m-1 p-2 bg-gray-100 template-skew text-purple-700 hover:bg-purple-700 hover:text-white">
          {title}
        </div>
      </Link>
      <p>{children}</p>
    </div>
  );
};

function Index({ data }) {
  const templates = data.templates.edges;
  const svg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(226,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%238033aa'/%3E%3Cstop offset='1' stop-color='%231c3ed3'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2336fff5' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2336fff5' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2336fff5' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2336fff5' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <Layout headerClass="relative bg-gray-900" bodyClass="px-0 md:px-0 lg:px-0">
      <SEO title="Home" />

      <div
        className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover"
        style={{ backgroundImage: svg }}
      >
        <div className="mt-56 bg-white w-full pb-16 mb-20 skew-y-5">
          <div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
            <h1 className="text-3xl md:text-5xl text-purple-700 font-bold leading-tight mb-16">
              CodeFund Ad Templates
            </h1>
          </div>
          <div className="flex flex-wrap pt-16">
            {templates.map(({ node }) => (
              <Template
                title={node.frontmatter.title}
                url={node.frontmatter.path}
                key={node.frontmatter.path}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    templates: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/templates/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
