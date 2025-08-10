import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Box, Typography, Button, } from "@mui/material";
import theme from "../../../theme";
import Link from "@docusaurus/Link";
const FeatureList = [
  /**
  {
    title: 'Lorem Ipsum',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem Ipsum
      </>
    ),
  },
  */
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
          Welcome to the documentation for the middleware internal dashboard
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "columns",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            mt: 10,
            width: 1,
          }}
        >
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
            Getting Started
          </Button>

          <Button
            href="/docs/cloud-functions/"
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
            Cloud Functions
          </Button>

          <Button
            href="/docs/ui-ux/"
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
            UI/UX
          </Button>

          <Button
            href="/docs/business-logic/"
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
            Business Logic
          </Button>

          <Button
            href="/docs/best-practice/"
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
            Best Practice
          </Button>

          <Button
            href="https://github.com/MiddlewareNewZealand/dashboard"
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
            Git Hub Repo
          </Button>
        </Box>
      </Box>
      {/** 
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    */}
    </section>
  );
}
