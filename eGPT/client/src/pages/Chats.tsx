import { useAuth } from "@/states/AuthContext.js";
import { Box, Avatar, Typography, Button } from "@mui/material";
import { red } from "@mui/material/colors";

const Chats = () => {
  const auth = useAuth();
  const avatarName = `${auth?.user?.name[0].toLocaleUpperCase()}${
    auth?.user?.name.toLocaleUpperCase().split(" ")[0][1]
  }`;
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        maxWidth: "1400px",
        m: "1rem auto",
        gap: 3,
        padding: "0 2rem"
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "50vh",
            bgcolor: "rgb(17, 29, 39)",
            borderRadius: 4,
            flexDirection: "column",
            p: "1rem 2rem",
            mt: 4,
          }}
        >
          <Avatar
            sx={{
              m: "1rem auto",
              bgcolor: "white",
              color: "black",
              fontWeight: "700",
            }}
          >
            {avatarName}
          </Avatar>
          <Typography
            sx={{ mx: "auto", fontFamily: "work sans", textAlign: "center" }}
          >
            Welcome, I am your project manager assistant.
            <br />
            How may I help you today?
          </Typography>
          <Typography
            sx={{ mt: 6, fontFamily: "work sans", textAlign: "center" }}
          >
            You can ask questions related to project delivery methods,
            construction managements, project management etc.
          </Typography>
          <Button
            sx={{
              px: 2,
              mx: "auto",
              mt: 5,
              color: "white",
              fontWeight: "700",
              bgcolor: red[400],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            CLEAR CONVERSATIONS
          </Button>
        </Box>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.7, xs: 1, sm: 1 },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "40px", color: "white", mb: 2 }}
        >
          Model - GPT 3.5
        </Typography>
      </Box>
    </Box>
  );
};

export default Chats;
