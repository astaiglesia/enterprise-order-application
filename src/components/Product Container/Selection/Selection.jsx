import "./Selection.scss";

const ItemSelection = () => {
  return (
    <div className="item-entry">
      <div className="selection-wrapper">

        <div className="search-wrapper">
          <label for="product-search"></label>
          <img className="search-icon" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search icon"/>
          <input type="search" id="product-search" name="product-search" placeholder="Search product inventory" aria-label="Search through proudct inventory"/>
          <input type="image" className="arrow-right" src="https://img.icons8.com/ios/50/000000/long-arrow-right.png" alt="arrow right icon to submit query" />
        </div>
        
        <div className="dropdown-wrapper">
          <form action="">
            <div className="selection-dropdown">
              <select name="function" id="function" >
                <option value="" disabled selected hidden>Function</option>
                <option value="Seating">Seating</option>
                <option value="Storage">Storage</option>
                <option value="Tables">Tables</option>
                <option value="Textiles">Textiles</option>
                <option value="june">June</option>
                <option value="Lighting">Lighting</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="selection-dropdown">
              <select name="category" id="category" >
                <option value="" disabled selected hidden>Category</option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
              </select>
            </div>
            <div className="selection-dropdown">
              <select name="product" id="product" >
                <option value="" disabled selected hidden>Product</option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
              </select>
            </div>
            <div className="selection-dropdown">
              <select name="color" id="color" >
                <option value="" disabled selected hidden>Color</option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
              </select>
            </div>
            <div className="selection-dropdown">
              <select name="option" id="option" >
                <option value="" disabled selected hidden>Option</option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
                <option value=" "></option>
              </select>
            </div>
            <div className="selection-dropdown">
              <select name="quantity" id="quantity" >
                <option value="" disabled selected hidden>Quantity</option>
                <option value=" ">1</option>
                <option value=" ">2</option>
                <option value=" ">3</option>
                <option value=" ">4</option>
                <option value=" ">5</option>
                <option value=" ">6</option>
                <option value=" ">7</option>
                <option value=" ">8</option>
                <option value=" ">9</option>
                <option value=" ">10</option>
              </select>
            </div>
            <div className="selection-dropdown">
              <select name="term-length" id="term-length" >
                <option value="" disabled selected hidden>Term Length</option>
                <option value=" ">1 Month</option>
                <option value=" ">3 Months</option>
                <option value=" ">6 Months</option>
                <option value=" ">9 Months</option>
                <option value=" ">12 Months</option>
              </select>
            </div>
            <div className="selection-dropdown">
              <select name="supply-chain" id="supply-chain" >
                <option value="" disabled selected hidden>Supply Chain</option>
                <option value=" ">In Stock</option>
                <option value=" ">Ordered, Not Yet Arrived</option>
                <option value=" ">Post-Rental Cleaning/Restoration</option>
                <option value=" ">Upstate/Personal Item</option>
              </select>
            </div>
          </form>
        </div>
        
      </div>
      <div className="buttons-wrapper">
        <button className="add-button">Add To Draft</button>
      </div>
    </div>
  )
}

export default ItemSelection;