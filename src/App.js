import React from "react";
import CollectionsBlock from "./components/CollectionsBlock";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import SlickSlider from "./components/SlickSlider";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Header />
          <HeroContent />
          <CollectionsBlock />
          <SlickSlider />
        </div>
      </>
    );
  }
}

export default App;
