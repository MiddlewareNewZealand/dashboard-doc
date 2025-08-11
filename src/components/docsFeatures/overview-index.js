import React from "react";
import { Button, Box } from "@mui/material";
import theme from '../../../theme';

export default function ButtonIndex({ buttons }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "columns",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        mt: 4,
        width: 1,
      }}
    >
      {buttons.map(({ title, link }, index) => (
        <Button
          key={index}
          href={link}
          variant="contained"
          sx={{
            maxWidth: "40%",
            minWidth: 170,
            height: 100,
            color: theme.palette.background.default,
            backgroundColor: theme.palette.secondary.main,
            fontWeight: "bold",
            fontSize: 22,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            },
          }}
        >
          {title}
        </Button>
      ))}
    </Box>
  );
}