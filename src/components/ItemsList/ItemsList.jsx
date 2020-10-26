import React from "react";
import "./itemsList.scss";

function ItemsList() {
  return (
    <div className="main-container">
      <div className="collection-item">
        <div className="image1"></div>
        <div className="collection-footer">
          <span className="name">Object</span>
        </div>
      </div>

      <div className="collection-item">
        <div className="image2"></div>
        <div className="collection-footer">
          <span className="name">Textile</span>
        </div>
      </div>

      <div className="collection-item">
        <div className="image3"></div>
        <div className="collection-footer">
          <span className="name">Jersey</span>
        </div>
      </div>

      <div className="collection-item">
        <div className="image4"></div>
        <div className="collection-footer">
          <span className="name">Photography</span>
        </div>
      </div>
    </div>
  );
}

export default ItemsList;
