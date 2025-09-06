import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";



export class App extends Component {

  state= {
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
            <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="Home" pageSize={5} country="us" category="Business" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress}  key="Sceince" pageSize={5} country="us" category="Science" />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress}  key="General" pageSize={5} country="us" category="General" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress}  key="Technology"pageSize={5} country="us" category="Technology" />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress}  key="Sports" pageSize={5} country="us" category="Sports" />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress}  key="Health"pageSize={5} country="us" category="/Health" />}/>
            <Route exact path="/Business" element={<News setProgress={this.setProgress}  key="Business"pageSize={5} country="us" category="Business" />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
