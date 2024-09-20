import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import News from './Components/News'
import { NavBar } from './Components/NavBar'

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={< News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="general" />} />
          <Route exact path="/business" element={< News key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="business" />} />
          <Route exact path="/entertainment" element={< News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="entertainment" />} />
          <Route exact path="/health" element={< News key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="health" />} />
          <Route exact path="/science" element={< News key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="science" />} />
          <Route exact path="/sports" element={< News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="sports" />} />
          <Route exact path="/technology" element={< News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="technology" />} />
        </Routes>
      </>
    )
  }
}

