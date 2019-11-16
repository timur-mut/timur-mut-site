import React from "react"
import Layout from "../components/layout/layout"
import {
  FaGithub as Github,
  FaVk as VK,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
} from "react-icons/fa"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"
import "./index.css"

function index() {
  return (
    <Layout>
      <SyntaxHighlighter
        showLineNumbers={true}
        customStyle={{ fontSize: 40, margin: 0 }}
        language="javascript"
        style={vs2015}
      >
        {`module.exports = {
  metadata: {
    name: "Timur",
    surname: "Mutallapov",
    age: "29",
    gender: "male",
    education: "graduated",
    vocation: "fullstack developer"
  },
  favorite-technologies: [
    "Dot.Net",
    "C#",
    "TypeScript",
    "React"
  ]
}`}
      </SyntaxHighlighter>

      <div className="social-networks-list">
        <a className="icon" href="https://instagram.com/timurmut">
          <Insta size={32} />
        </a>
        <a className="icon" href="https://github.com/timur-mut">
          <Github size={32} />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/timur-mutallapov-a9b27680/"
        >
          <LinkedIn size={32} />
        </a>
        <a className="icon" href="https://vk.com/timur_mut">
          <VK size={32} />
        </a>
        <a className="icon" href="mailto://timur-mut@live.com">
          <Mail size={32} />
        </a>
      </div>
    </Layout>
  )
}

export default index
