import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <AniLink
      cover
      bg="#4EC9B0"
      className="nav-link"
      to={to}
      activeStyle={{
        color: "rgb(78, 201, 176)",
      }}
      style={{
        color: "rgb(220, 220, 220)",
      }}
    >
      {children}
    </AniLink>
  )
}
