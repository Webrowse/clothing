const App = () => {
  const category = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneaker",
    },
    {
      id: 4,
      title: "Mens",
    },
    {
      id: 5,
      title: "Womens",
    }
  ]
  return (
    <div className="categoies">
      {category.map(({ title }) => (
        <div className="category">
          { /*<img src="" />*/}
          <div className="category-body">
            <h1>{title}</h1>
            <p>Shop Now</p>
          </div>
        </div>

      ))}
    </div>
  );
}

export default App;
