import "./SortProducts.css";

function SortProducts({ sortBy, setSortBy }) {
  return (
    <div className="sort-container">

      <label>Sort By</label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Featured</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
        <option value="a-z">Name: A → Z</option>
        <option value="z-a">Name: Z → A</option>
      </select>

    </div>
  );
}

export default SortProducts;