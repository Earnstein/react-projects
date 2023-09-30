import { Box } from "@mui/material";

const UserImage = ({ image, size }) => {
  const imgSize = size || "60px";
  return (
    <Box width={imgSize} height={imgSize}>
      <img
        src={`http://localhost:3001/assets/${image}`}
        alt="user"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={imgSize}
        height={imgSize}
      />
    </Box>
  );
};

export default UserImage;
