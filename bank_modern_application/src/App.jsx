import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Client,
  CTA,
  Footer,
  Hero,
  Stats,
  Testimonials,
} from "./sections";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <header className={`${styles.boxWidth}`}>
          <Navbar />
        </header>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default App;
