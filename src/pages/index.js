import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    {
      site {
        buildTime
        siteMetadata {
          social {
            instagram
            twitter
          }
          links
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

  const blogPosts = data.allFeedBlog.nodes.map(node => Object.assign(Object.assign(node, data.feedRecetarioMeta), {
    sourceName: "UnBaúl.com",
    sourceIcon: <span role="img" aria-label="Emoji escritor">✍🏼</span>,
    pubDate: new Date(node.pubDate)
  }))
  const recetarioPosts = data.allFeedRecetario.nodes.map(node => Object.assign(Object.assign(node, data.feedRecetarioMeta), {
    sourceName: "Recetario",
    sourceIcon: <span role="img" aria-label="Emoji cocinero">👨‍🍳</span>,
    pubDate: new Date(node.pubDate)
  }))
  let allPosts = blogPosts.concat(recetarioPosts)
  allPosts.sort((a, b) => b.pubDate - a.pubDate)

  return (


    <Layout>
      <SEO title="Agregador de Links" />
      <div className="mx-auto w-11/12 md:w-8/12 lg:w-5/12 flex flex-col">
        {allPosts.map((node, index) => (
          <Card key={"card_"+index} idx={index} title={node.title}
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
