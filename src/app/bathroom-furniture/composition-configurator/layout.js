export default function DefaultLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            {children}
        </section>
    );
}