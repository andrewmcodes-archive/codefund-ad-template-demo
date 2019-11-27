exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  const templates = result.data.allMarkdownRemark.edges;
  templates.forEach(function({ node }) {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: require.resolve("./src/templates/template.js"),
      context: {
        id: node.id
      }
    });
  });
};
