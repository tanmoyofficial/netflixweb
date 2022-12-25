import React from "react";
import "./hero-content.css";
class HeroContent extends React.Component {
  render() {
    return (
      <>
        <section className="hero-content">
          <div className="container">
            <div className="content">
              <h1 className="title">TV Shows</h1>
              <div className="dec">
                <p>
                  These days, the small screen has some very big things to
                  offer. From sitcoms to dramas to travel and talk shows, these
                  are all the best programs on TV.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default HeroContent;
