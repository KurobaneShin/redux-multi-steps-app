import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
const Header = () => {
  return (
    <Box
      sx={{
        p: "25px 0",
        borderBottom: "1px solid #16195c",
      }}
    >
      <Typography sx={{ color: "white" }} variant="h1" align="center">
        Cadastro de Desenvolvedor
      </Typography>
      <Typography sx={{ color: "#b8b8d4" }} variant="body2" align="center">
        cadastre-se para otimas oportunidades
      </Typography>
    </Box>
  );
};

export default Header;
