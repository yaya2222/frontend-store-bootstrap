import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap"
import HomeScreens from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container >
          <Routes>
            <Route path="/" element={<HomeScreens />}  />
            <Route path="/product/:id" element={<ProductScreen />}  />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
