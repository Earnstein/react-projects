import { PopularProductCard } from "../components"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products"
    className="max-container max-sm:mt-12"    
    >
      <div className="flex flex-col justify-start gap-6">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Product
        </h2> 
        <p className="lg:max-w-lg">Experience top-notch quality and style with our 
          sought-after seletions. Discover a world of comfort,
          design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 
      md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product) => (
            <PopularProductCard key={product.name}
            name={product.name} 
            imgURL={product.imgURL}
            price={product.price}/>
          ))}
      </div>
    </section>
  )
}

export default PopularProducts