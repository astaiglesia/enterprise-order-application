import "./Selection.scss";

const ItemSelection = () => {
  return (
    <div className="item-entry">
      <div className="selection-wrapper">

        <div className="search-wrapper">
          <label for="product-search"></label>
          <img className="search-icon" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search icon"/>
          <input type="search" id="product-search" name="product-search" placeholder="Search product inventory" aria-label="Search through proudct inventory"/>
          <img className="arrow-right" src="https://img.icons8.com/ios/50/000000/long-arrow-right.png" alt="arrow right icon"/>
        </div>
        
        dropdowns
      </div>
      <div className="buttons-wrapper">button</div>
    </div>
  )
}

export default ItemSelection;