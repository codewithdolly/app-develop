import * as React from "react";
import "./HotBets.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../Images/rakesh.jfif";
import icon1 from "../Images/icon1.png";

const HotBets = () => {
  const theme = useTheme();

  return (
      <div className="hotBets">   
      {betCards.map((card)=>{
          return (<>
            <Card sx={{ maxWidth: 225, p: 1 }} className="hotBets--cards">
      <div style={{ display: "flex" }}>
        <Avatar alt="Remy Sharp" src={img1} sx={{ width: 50, height: 50 }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6" sx={{ color: "black" }}>
              Luck Marlow
            </Typography>
            <div style={{ display: "flex" }}>
              <Avatar src={icon1} variant="rounded"  sx={{ width: 24, height: 24 }} />
              <Typography variant="subtitle1" component="div">
                108% PROFIT
              </Typography>
            </div>
          </CardContent>
        </Box>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button href="#text-buttons" className="btn" color="error">
          1m25s
        </Button>
        <Button variant="contained" className="btn btn2">
          HOT Bet Now
        </Button>
      </div>
    </Card>
          </>)
      })}
    </div>

  );
};

export default HotBets;

const betCards=[
    {
        name:"Luck Marlow",
    },
    {
        name:"Luck Marlow",
    },
    {
        name:"Luck Marlow",
    },
    {
        name:"Luck Marlow",
    },
    {
        name:"Luck Marlow",
    },

]
