import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";

import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "@/components/UserImage.jsx";
import FlexBetween from "@/components/FlexBetween.jsx";
import WidgetWrapper from "@/components/WidgetWrapper.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { linkedinImg, twitterImg } from "@/assets/index.js";
import UserWidgetSkeleton from "../UserWidgetSkeleton.jsx";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  const getUser = async () => {
    const response = await axios.get(`http://localhost:3001/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };
  const {
    isLoading,
    isError,
    error: error1,
  } = useQuery("user", () => getUser(), {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  if (isError) {
    console.log(error1);
  }

  if (isLoading) {
    return <UserWidgetSkeleton />;
  }

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;
  return (
    <WidgetWrapper>
      {/*FIRST ROW*/}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profilepage/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>

            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
         <ManageAccountsOutlined />
      </FlexBetween>
      <Divider />
      {/*SECOND ROW*/}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" color={main} />

          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" color={main} />

          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>
      <Divider />

      {/*THRID ROW*/}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Who has viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>
      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" fontWeight="500" mb="1rem" color={main}>
          Social profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src={twitterImg} alt="twitter" />

            <Box>
              <Typography fontWeight="500" color={main}>
                Twitter
              </Typography>
              <Typography fontWeight="500" color={medium}>
                Social Network
              </Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src={linkedinImg} alt="linkedin" />

            <Box>
              <Typography fontWeight="500" color={main}>
                LinkedIn
              </Typography>
              <Typography fontWeight="500" color={medium}>
                NetWork Platform
              </Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
