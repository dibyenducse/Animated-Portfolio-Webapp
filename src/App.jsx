import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';

const App = () => {
    return (
        <div>
            <section>
                <Navbar />
                <Hero />
            </section>
            <section id="Services">
                <Parallax type="Services" />
            </section>
            <section>Services</section>
            <section id="Portfolio">
                <Parallax type="Portfolio" />
            </section>
            <section>Portfolio1</section>
            <section>Portfolio2</section>
            <section>Portfolio3</section>
            <section>Contact</section>
        </div>
    );
};

export default App;
