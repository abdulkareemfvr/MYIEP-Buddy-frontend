import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
