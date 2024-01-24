import { AspectRatio } from "@/components/ui/aspect-ratio";

const Myimage = ({image}) => {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image src={image} alt="Image" className="rounded-md object-cover" />
      </AspectRatio>
    </div>
  )
}

export default Myimage