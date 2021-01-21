import PropTypes from "prop-types"
import React from "react"

const Card = ({ idx, sourceTitle, sourceIcon, title, pubDate, link, featuredImage, contentSnippet }) => {


  const fecha = new Date(pubDate)
  return (
    <a key={idx} href={link} className="w-full md:w-2/3 mx-auto my-5 lg:max-w-full lg:flex shadow-lg">
      <img alt="Placeholder"
           className="w-full h-32 md:h-48 lg:h-auto lg:w-48 object-cover flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
           src={featuredImage} />

      <div
        className="border-r border-b border-l border-gray-100 lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <div className="text-blue-800 text-black font-bold text-xl mb-2">{title}</div>
          <p className="text-grey-darker text-sm">{contentSnippet}</p>
        </div>
        <div className="flex items-center">
          <span className="text-3xl">{sourceIcon}</span>
          <div className="flex items-center justify-between text-sm ml-2">
            <p className="text-black leading-none">publicado en <b>{sourceTitle}</b></p>
            <p className="ml-10 text-grey-dark"><small>{fecha.toLocaleDateString()}</small></p>
          </div>
        </div>
      </div>
    </a>
  )
}

  Card.propTypes = {
    sourceTitle: PropTypes.string.isRequired,
    sourceIcon: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    pubDate: PropTypes.any.isRequired,
    link: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string.isRequired
  }

  export default Card
