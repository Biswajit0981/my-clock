import Footer from "./components/Footer.tsx";
import ClockContainer from "./components/ClockContainer.tsx";

const App = () => {

    return (
        <section id="clock">
            <ClockContainer/>

            <footer className="clock_footer">
                <Footer/>
            </footer>
        </section>
    )
}
export default App
