import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

const SelectOption = ({ title, description, selected, onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      sx={[
        {
          display: "flex",
          ...(selected === true
            ? { border: "2px solid #25cd89" }
            : { border: "2px solid #16195c" }),
          borderRadius: "10px",
          padding: "20px",
          mb: "15px",
          alignItems: "center",
          cursor: "pointer",
        },
        () => ({
          "&:hover": {
            border: "2px solid #496459",
          },
        }),
      ]}
    >
      <Box>
        <Typography sx={{ color: "white", mt: 2 }} variant="h4">
          {title}
        </Typography>
        <Typography sx={{ color: "#b8b8d4", mt: 2 }} variant="body2">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SelectOption;
