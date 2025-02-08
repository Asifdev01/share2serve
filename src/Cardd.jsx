import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "auto",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  transition: "transform 0.2s ease-in-out",
  '&:hover': {
    transform: "scale(1.05)",
    mt:3,
    overFlow: "hidden",
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  borderRadius: "8px 8px 0 0",
});

const StyledCardContent = styled(CardContent)({
  textAlign: "center",
});

const StyledTypographyTitle = styled(Typography)({
  fontSize: "1.5rem",
  marginBottom: "0.8rem",
  fontWeight: "bold",
});

const StyledTypographyBody = styled(Typography)({
  fontSize: "1rem",
  color: "#555",
});

const CustomCard = ({ image, title, body }) => {
  return (
    <StyledCard>
      <StyledCardMedia component="img" image={image} alt={title} />
      <StyledCardContent>
        <StyledTypographyTitle variant="h5">
          {title}
        </StyledTypographyTitle>
        <StyledTypographyBody variant="body2">
          {body}
        </StyledTypographyBody>
      </StyledCardContent>
    </StyledCard>
  );
};

const CardGrid = ({ cards = []}) => {
 

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {cards.map((card, index) => (
        <CustomCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
