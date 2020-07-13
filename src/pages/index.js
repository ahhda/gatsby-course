import React from "react"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1>Welcome to my Blog!</h1>
      <p>This is where I post all the cool stuff.</p>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={ node.frontmatter.path } >
            <h3 style={{ marginBottom: `${rhythm(1 / 4)}` }}>
              {node.frontmatter.title}{" "}
              <span style={{ color: `#bbb` }}>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`