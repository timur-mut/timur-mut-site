import React from "react"
import Intent from "../link"
import "./appbar.css"

export default function AppBar() {
  return (
    <ul className="menu">
      <li>
        <Intent to="/">me.config</Intent>
      </li>
      <li>
        <Intent to="/projects">my.projects</Intent>
      </li>
    </ul>
  )
}
