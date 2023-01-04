import "./App.css";

const posts = [
  {
    id: 1,
    image: "/services-info/1.jpg",
    title: "Pilne: Co to był za dzień!",
    intro: "Tego świat jeszcze nie widział",
  },
  {
    id: 2,
    image: "./2.jpg",
    title: "Wszyscy zazdroszą Polakom!",
    intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił",
  },
  {
    id: 3,
    image: "3.jpg",
    title: "Adam Małysz zgolił wąs",
    intro:
      "Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy",
  },
];

function BlogTitle({image, title, intro}) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt="Mountain view"/>
      <p>{intro}</p>
    </article>
  );
}

function App() {
  return (
    <>
    <h1>Halooo</h1>
    <section className="App">
      {posts.map((elem, index) => (
        <BlogTitle key={index} image={elem.image} title={elem.title} intro={elem.intro}  />
      ))}
    </section>
    </>
  );
}

export default App;
