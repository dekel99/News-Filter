import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { ArticleProvider } from "./context/ArticlesContext"

function App() {
  return (
    <div className="App">
      <ArticleProvider>
        <Header/>
        <Body />
        <Footer />
      </ArticleProvider>
    </div>
  );
}

export default App;
