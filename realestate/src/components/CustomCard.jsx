import { Card } from "react-bootstrap";

const CustomCard = ({title, image}) => {
  return (
    <div className="mb-3 shadow-sm">
      <Card className="p-1 rounded-0 shadow-none border-1">
        <Card.Img src={image} variant="top" className="rounded-0" />
      </Card>
      <Card.Text as="a" href={"/"} className="text-decoration-none">
        <Card.Text as="h6" className="py-1 img-title">{title}</Card.Text>
      </Card.Text>
    </div>
  );
};

export default CustomCard;
