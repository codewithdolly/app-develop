import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import img1 from "../Images/rakesh.jfif";
import icon1 from "../Images/icon1.png";

const HotBets = () => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", maxWidth: 245 }}>
      <Avatar alt="Remy Sharp" src={img1} sx={{ width: 50, height: 50 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6" sx={{ color: "black" }}>
            Luck Marlow
          </Typography>
          <div style={{ display: "flex" }}>
            <Avatar src={icon1} variant="rounded" />
            <Typography variant="subtitle1" component="div">
              108% PROFIT
            </Typography>
          </div>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "spaceBetween" }}>
          <Button href="#text-buttons">Link</Button>
          <Button variant="contained">Contained</Button>
        </div>
      </Box>
    </Card>
  );
};

export default HotBets;
