import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories({ category, setCategory }) {
  const navigate = useNavigate();

  const categories = [
    {
      name: "All",
      description: "Browse all products.",
    },
    {
      name: "Smart Gadgets",
      description: "Explore Smart Gadgets.",
    },
    {
      name: "Home Essentials",
      description: "Explore Home Essentials.",
    },
    {
      name: "Kitchen Gadgets",
      description: "Explore Kitchen Gadgets.",
    },
    {
      name: "Beauty & Personal Care",
      description: "Explore Beauty & Personal Care.",
    },
    {
      name: "Kids Products",
      description: "Explore Kids Products.",
    },
  ];

  const handleCategoryClick = (selectedCategory) => {
    // Category select karo
    setCategory(selectedCategory);

    // Shop page par jao
    navigate("/shop");
  };

  return (
    <section className="categories-section">

      <h1>Shop by Category</h1>

      <div className="categories-grid">

        {categories.map((item) => (
          <button
            key={item.name}
            type="button"
            className={`category-card ${
              category === item.name ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(item.name)}
          >

            <h2>{item.name}</h2>

            <p>{item.description}</p>

          </button>
        ))}

      </div>

    </section>
  );
}

export default Categories;