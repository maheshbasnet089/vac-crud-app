import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function About() {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "98vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        sx={{ height: 200, width: 200 }}
        src="https://source.unsplash.com/random/"
      />
      <Box>
        <Typography variant="h3">John Doe </Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="text.secondary">
          Itahari,Sunsari
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="text.secondary">
          test@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
