import { AspectRatio } from "./ui/aspect-ratio"

const Image = ({image}) => {
  return (
    <>
    <AspectRatio ratio={16 / 9}>
      <img src={image} alt="Image" className="rounded-md object-cover" />
    </AspectRatio>
  </>
  )
}

export default Image