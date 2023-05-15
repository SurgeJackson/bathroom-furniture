import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

export default function DefaultLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            <Header />
            {children}
            <Footer/>
        </section>
    );
}