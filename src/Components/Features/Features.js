import React from "react";
import "./Features.css";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon from "../Images/icon2.png"

const Features = () => {
  return (
    <>
      <div className="features">
        <h3>Features</h3>
        <div>
          {featureDetails.map((card) => {
            return (
              <>
                <Card className="features--cards">
                 <div style={{display:"flex", alignItems:"center",  justifyContent: "space-between"}}>
                 <CardContent>
                    <Typography
                      sx={{ fontSize: 20 }}
                      component="div"
                    >
                     <b>{card.header}</b>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 18 }}
                      component="div"
                    >
                    {card.para}
                    </Typography>
                   
                  </CardContent>
                  <Avatar alt="Icon" src={icon} sx={{ width: 40, height: 40 }}/>
                 </div>
                 <div style={{display:"flex", justifyContent: "space-between", margin:"0 1rem"}}>
                 <Typography color="GrayText">Race {card.race}</Typography>
                     <p>{card.day} days</p>
                 </div>
                 
                </Card>
              </>
            );
          })}
        </div>
      </div>

      <Button
        href="#text-buttons"
        className="btn view"
        endIcon={<ChevronRightIcon />}
      >
        View More
      </Button>
      <div className="break"></div>
    </>
  );
};

export default Features;

const featureDetails = [
  {
    header: "Cox Plate",
    para: "Flemington",
    race: 7,
    day: 23,
  },
  {
    header: "the Golden Eagle",
    para: "Randwick",
    race: 8,
    day: 165,
  },
  {
    header: "Cox Plate",
    para: "Flemington",
    race: 7,
    day: 3,
  },
  {
    header: "Cox Plate",
    para: "Flemington",
    race: 7,
    day: 3,
  },
  {
    header: "Cox Plate",
    para: "Flemington",
    race: 7,
    day: 3,
  },
];
