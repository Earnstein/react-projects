import { Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import WidgetWrapper from "@/components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
      </FlexBetween>
      <img
        src="http://localhost:3001/assets/info4.jpeg"
        alt="advert"
        width="100%"
        height="auto"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>BeesHairven</Typography>
        <Typography color={medium}>BeesHairven.com</Typography>
      </FlexBetween>
      <Typography sx={{ color: medium, margin: "0.5rem 0" }}>
          Luxury hair at affordable prices...
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
