import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomCard = ({ title, image }) => {
  return (
    <div className="mb-3 shadow-sm">
      <Card className="p-1 rounded-0 shadow-none border-1">
        <Card.Img src={image} variant="top" className="rounded-0" alt={title} />
      </Card>
      <Link to={`/project/${title}`}>
        <Card.Text className="text-decoration-none">
          <Card.Text as="h6" className="py-1 img-title">
            {title}
          </Card.Text>
        </Card.Text>
      </Link>
    </div>
  );
};

export default CustomCard;
