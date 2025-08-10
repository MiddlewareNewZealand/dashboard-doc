import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import theme from "../../theme.js";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const palette = theme.palette;
  return (
    <Box sx={{background: palette.secondary.main, p:4}}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: palette.background.default,
        }}
      >
        {siteConfig.title}
      </Typography>
    </Box>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
