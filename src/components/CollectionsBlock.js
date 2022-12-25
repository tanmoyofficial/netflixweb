import React from "react";
import CollectionCard from "./CollectionCard";
import "./collections-block.css";
import { Popular, AwardWining } from "../Api";

const apiPopular = Popular;
const apiAward = AwardWining;

class CollectionsBlock extends React.Component {
  render() {
    return (
      <>
        <section className="collections-block">
          <div className="container">
            {/* Popular on Netflix */}
            <div className="content">
              <div className="title">
                <h2>Popular on Netflix</h2>
              </div>
              <div className="colloctions">
                {apiPopular.map(function card(val, i) {
                  return (
                    <CollectionCard
                      key={i}
                      titleName={val.titleName}
                      imgSrc={val.imgSrc}
                      imgAlt={val.imgAlt}
                      link={val.link}
                    />
                  );
                })}
              </div>
            </div>
            {/* Award-Winning TV Shows  */}
            <div className="content">
              <div className="title">
                <h2>Award-Winning TV Shows</h2>
              </div>
              <div className="colloctions">
                {apiAward.map(function card(val, i) {
                  return (
                    <CollectionCard
                      key={i}
                      titleName={val.titleName}
                      imgSrc={val.imgSrc}
                      imgAlt={val.imgAlt}
                      link={val.link}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default CollectionsBlock;
