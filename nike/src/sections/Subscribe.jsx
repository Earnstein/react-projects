import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between
    items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="capitalize text-4xl leading-[60px]
      lg:max-w-lg lg:text-[36px] font-palanquin font-bold max-lg:text-[40px]">
        sign up for <span className="text-coral-red">updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[50%] w-full flex items-center
      max-sm:flex-col gap-6 p-2.5
      sm:border sm:border-slate-gray rounded-full">
        <input type="email" name="customer_email" id="email" placeholder="subscribe@nike.com" className="input"/>
        <div className="flex max-sm:justify-end 
        items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe