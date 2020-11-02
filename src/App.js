import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/Products/Products";
import Feature from "./components/Feature/Feature";
import { productData, productDataTwo } from "./data";
import Footer from "./components/Footer/Footer";

const App = () => (
    <Router>
        <GlobalStyle />

        <Hero />

        <Products heading="Choose your favorite" data={productData} />

        <Feature />

        <Products heading="Sweet treats for you" data={productDataTwo} />

        <Footer />
    </Router>
);

export default App;
