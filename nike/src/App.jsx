import {
  CustomersReview,
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  PopularProducts,
  Footer} from './sections/index';

  import Nav from './components/Nav';

const App = () => {
  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
      </section>

      <section className="padding bg-pale-blue">
          <PopularProducts />
      </section>

      <section className="padding">
          <SuperQuality />
      </section>

      <section className="padding-x py-10 bg-pale-blue">
          <Services />
      </section>

      <section className="padding">
          <SpecialOffer />
      </section>

      <section className="bg-pale-blue padding">
          <CustomersReview />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
      </section>
    </main>
  )
}

export default App