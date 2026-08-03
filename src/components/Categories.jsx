import "./Categories.css";

function Categories({ category, setCategory }) {

  const categories = [
    "All",
    "Smart Gadgets",
    "Home Essentials",
    "Kitchen Gadgets",
    "Beauty & Personal Care",
    "Kids Products",
  ];

  return (
    <section className="categories">

      <h2>Shop by Category</h2>

      <div className="category-grid">

        {categories.map((item) => (

          <div
            key={item}
            className={`category-card ${
              category === item ? "active-category" : ""
            }`}
            onClick={() => setCategory(item)}
          >
            <h3>{item}</h3>

            <p>
              {item === "All"
                ? "Browse all products."
                : `Explore ${item}.`}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;