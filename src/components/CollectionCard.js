import React from "react";
import "./collection-card.css";

class CollectionCard extends React.Component {
  render() {
    const { titleName, imgSrc, imgAlt, link } = this.props;
    return (
      <>
        <a href={link} target="_blank" rel="noreferrer" className="card">
          <img src={imgSrc} alt={imgAlt} className="card-img" />
          <h3 className="series-name">{titleName}</h3>
        </a>
      </>
    );
  }
}

export default CollectionCard;
