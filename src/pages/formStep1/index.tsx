import React, { useEffect } from "react";
import Base from "../../components/base";
import Typography from "@mui/material/Typography";
import { Box, Button, Input } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

import { setCurrentStep, setName } from "../../features/form/formSlice";

const FormStep1 = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useAppSelector((state) => state.form);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleNextButton = () => {
    form.name !== "" ? navigate("/step2") : alert("Preencha os dados");
  };

  useEffect(() => {
    dispatch(setCurrentStep(0));
  }, [dispatch]);

  return (
    <Base>
      <Typography sx={{ color: "#b8b8d4" }} variant="body1">
        passo 1/3
      </Typography>
      <Typography sx={{ color: "#b8b8d4", mt: 2 }} variant="h3">
        Digite o seu nome
      </Typography>
      <Typography sx={{ color: "#b8b8d4", mt: 2 }} variant="body2">
        Preencha o campo com seu nome completo.
      </Typography>
      <hr />
      <Box sx={{ display: "flex", flexDirection: "column", pt: "20px" }}>
        <Input
          id="outlined-required"
          value={form.name}
          placeholder="Digite seu nome"
          onChange={handleNameChange}
          sx={{ mt: 2, mb: 2, color: "white" }}
        />
        <Button
          sx={{ width: "100px" }}
          onClick={handleNextButton}
          variant="contained"
        >
          Proximo
        </Button>
      </Box>
    </Base>
  );
};

export default FormStep1;
