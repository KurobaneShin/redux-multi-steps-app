import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import Stepper from "./stepper";

type Props = {
  children: ReactNode;
};

const Base = ({ children }: Props) => {
  return (
    <Box sx={{ bgcolor: "#02044A", height: "100vh" }}>
      <Container maxWidth="xl">
        <Header />
        <Box
          sx={{
            display: "flex",
            flex: 1,
          }}
        >
          <Box
            sx={{
              width: "250px",
              borderRight: "1px solid white",
            }}
          >
            <Typography
              component={"span"}
              sx={{ color: "#b8b8d4" }}
              variant="body2"
              align="center"
            >
              <Stepper />
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              pt: "40px",
              pl: "40px",
            }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Base;
