import { Controller } from "@hotwired/stimulus"
import React from "react";
import ReactDom from "react-dom"
import App from '../App'

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("connected")

    const root = ReactDom.createRoot(document.getElementById("app"))
    root.render(
        <App/>
    )
  }
}
