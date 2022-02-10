import * as React from "react";
import "./HotBets.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HotBets = () => {
  return (
    <div className="hotBets">
      <h3>HOT Bets</h3>
      {betCards.map((card) => {
        return (
          <>
            <Card sx={{ p: 1 }} className="hotBets--cards">
              <div style={{ display: "flex" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={process.env.PUBLIC_URL + card.image}
                  sx={{ width: 70, height: 70 }}
                />
                <Box sx={{ display: "flex" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      sx={{ color: "black", fontSize: 20  }}
                    >
                      <b>{card.name}</b>
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Avatar
                        src={process.env.PUBLIC_URL + card.icon}
                        variant="rounded"
                        sx={{ width: 24, height: 24 }}
                      />
                      <Typography variant="subtitle1" component="div">
                        {card.profit}% PROFIT{" "}
                        <p className="hotBets--cards--span">on turnover</p>
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
          </>
        );
      })}
      <Button
        href="#text-buttons"
        className="btn view"
        endIcon={<ChevronRightIcon />}
      >
        View More
      </Button>
      <div className='break'></div>
    </div>
  );
};

export default HotBets;

const betCards = [
  {
    name: "Luck Marlow",
    icon: "../Images/icon1.png",
    image: "../Images/rakesh.jfif",
    profit: 108,
  },
  {
    name: "The Sultan",
    icon: "../Images/icon2.png",
    image: "../Images/rakesh.jfif",
    profit: 80,
  },
  {
    name: "Luck Marlow",
    icon: "../Images/icon1.png",
    image: "../Images/rakesh.jfif",
    profit: 108,
  },
  {
    name: "The Sultan",
    icon: "../Images/icon2.png",
    image: "../Images/rakesh.jfif",
    profit: 80,
  },
];
