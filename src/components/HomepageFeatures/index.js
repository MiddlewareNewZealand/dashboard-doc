import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Box, Typography, Button, } from "@mui/material";
import theme from "../../../theme";
import Link from "@docusaurus/Link";

export default function HomepageFeatures() {
  return (
    <section>
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="h4" sx={{ textAlign: "center", mt:4, mb:8 }}>
          Welcome to the documentation for the middleware internal dashboard
        </Typography>
         <Button
            href="/docs/getting-started/"
            variant="contained"
            color={theme.palette.primary.main}
            sx={{
              width: "25%",
              height: 100,
              color: theme.palette.background.default,
              backgroundColor: theme.palette.secondary.main,
              fontWeight: 'bold',
              fontSize: 22,
            }}
          >
            Getting Started?
          </Button>
      </Box>
    </section>
  );
}
