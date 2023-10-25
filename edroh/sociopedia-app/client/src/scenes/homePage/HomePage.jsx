import MyPostWidget from "@/scenes/widgets/post/MyPostWidget.jsx";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "@/components/navbar/Navbar.jsx";
import UserWidget from "@/scenes/widgets/user/UserWidget.jsx";
import PostsWidget from "../widgets/post/PostsWidget";
import AdvertWidget from "../widgets/post/AdvertWidget";
import FriendListWidget from "../widgets/post/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        p="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="2rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? "40%" : undefined}
          mt={isNonMobileScreen ? "undefined" : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id}/>
        </Box>

        {isNonMobileScreen && <Box flexBasis="26%">
          <AdvertWidget/>
          <Box m="2rem 0"/>
          <FriendListWidget userId={_id}/>
          </Box>}

      </Box>
    </Box>
  );
};

export default HomePage;
