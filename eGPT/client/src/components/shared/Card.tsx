import {
  Box,
  Card,
  Typography,
  Avatar,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import { red } from "@mui/material/colors";

type Props = {
  avatar: string;
};

const ChatCard = ({ avatar }: Props) => {
  return (
    <Box sx={{ minWidth: 375,  width: "100%"}}>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "60vh",
            p:2,
            bgcolor: "rgb(17, 29, 39)",
            justifyContent:"center", 
            alignItems:"center"
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ fontSize: 14 }} color="text.secondary">
              {avatar}
            </Avatar>
            <Typography
              sx={{
                mx: "auto",
                fontFamily: "work sans",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              Welcome, I am your project manager assistant.
              <br />
              How may I help you today?
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 6, fontFamily: "work sans", textAlign: "center" }}
            >
              You can ask some questions related to project delivery
              methods,construction managements,
              <br /> project management etc. Avoid sharing personal information
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Button
              sx={{
                px: 2,
                color: "white",
                fontWeight: "700",
                bgcolor: red[400],
                ":hover": {
                  bgcolor: red.A400,
                },
              }}
              size="small"
            >
              CLEAR CONVERSATIONS
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default ChatCard;
