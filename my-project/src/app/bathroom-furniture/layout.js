import Header from "../components/Header/Header";
import Video from "../components/Video";
import Footer from "../components/Footer";

export default function DefaultLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            <Header />
            {children}
            <Video />
            <Footer/>
        </section>
    );
}