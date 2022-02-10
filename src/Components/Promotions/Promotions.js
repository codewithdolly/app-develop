import React from "react";
import "./Promotions.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Promotions = () => {
  return (
    <>
      <div className="promotions">
        <h3>Latest Promotions</h3>
        {promotionDetails.map((card) => {
          return (
            <>
              <Card sx={{ maxWidth: 632 }} className="promotions--cards">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={process.env.PUBLIC_URL + card.img}
                />
                <div className="card-details">
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0 1rem",
                    }}
                  >
                    {" "}
                    <Button variant="contained" className="betNow btn">
                      Bet Now
                    </Button>
                    <Button
                      className="btn"
                      endIcon={<KeyboardArrowDownOutlinedIcon />}
                    >
                      Term & Conditions
                    </Button>
                  </div>
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Promotions;

const promotionDetails = [
  {
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet molestiae voluptate eos. Fugiat rerum iusto perspiciatis in voluptatibus repellendus, necessitatibus quam perferendis aliquid, maiores, cupiditate id sapiente odio reiciendis.",
    img: "../Images/sports.jpg",
  },
  {
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet molestiae voluptate eos. Fugiat rerum iusto perspiciatis in voluptatibus repellendus, necessitatibus quam perferendis aliquid, maiores, cupiditate id sapiente odio reiciendis.",
    img: "../Images/sports.jpg",
  },
  {
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet molestiae voluptate eos. Fugiat rerum iusto perspiciatis in voluptatibus repellendus, necessitatibus quam perferendis aliquid, maiores, cupiditate id sapiente odio reiciendis.",
    img: "../Images/sports.jpg",
  },
  {
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet molestiae voluptate eos. Fugiat rerum iusto perspiciatis in voluptatibus repellendus, necessitatibus quam perferendis aliquid, maiores, cupiditate id sapiente odio reiciendis.",
    img: "../Images/sports.jpg",
  },
];
