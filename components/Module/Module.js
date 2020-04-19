import React from "react"
import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"

import TodoList from "../TodoList"

function App({ children }) {
  return (
    <>
      <Head>
        <title>Dicer App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
      </Head>

      <Header />

      {children}
    </>
  )
}

export default App
