import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { SiCodechef, GiFountainPen } from "react-icons/all";

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    {
      site {
        buildTime
        siteMetadata {
          author
          description
          title
        }
      }
      feedBlogMeta {
        sourceTitle: title 
        sourceLink: link
        sourceDescription: description
      }
      allFeedBlog {
        nodes {
          title
          pubDate
          link
          featuredImage
          contentSnippet
        }
      }
      feedRecetarioMeta {
        sourceTitle: title 
        sourceLink: link
        sourceDescription: description 
      }
      allFeedRecetario {
        nodes {
          title
          pubDate
          link
          featuredImage
          contentSnippet
        }
      }
   }
  `)

  const blogPosts = data.allFeedBlog.nodes.map(node => Object.assign(Object.assign(node, data.feedRecetarioMeta),{
    sourceName:"UnBaúl.com",
    sourceIcon: <span>✍🏼</span>
  }))
  const recetarioPosts = data.allFeedRecetario.nodes.map(node => Object.assign(Object.assign(node, data.feedRecetarioMeta),{
    sourceName:"Recetario",
    sourceIcon: <span>👨‍🍳</span>
  }))
  const allPosts = blogPosts.concat(recetarioPosts).sort((a, b) => new Date(a.pubDate) < new Date(b.pubDate))

  return (


    <Layout>
      <SEO title="Home" />
      <div className="flex flex-col">
      {allPosts.map(node => (
        <Card title={node.title}
              contentSnippet={node.contentSnippet}
              featuredImage={node.featuredImage}
              link={node.link}
              pubDate={node.pubDate}
              sourceTitle={node.sourceName}
              sourceIcon={node.sourceIcon} />))}
      </div>
    </Layout>
  )
}

export default IndexPage
