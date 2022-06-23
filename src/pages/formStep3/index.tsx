import React, { useEffect } from "react";
import Base from "../../components/base";
import Typography from "@mui/material/Typography";
import { Box, Button, Input } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

import {
  setCurrentStep,
  setEmail,
  setGithub,
} from "../../features/form/formSlice";

const FormStep1 = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useAppSelector((state) => state.form);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setGithub(e.target.value));
  };

  const handleNextButton = () => {
    if (form.email !== "" && form.github !== "") {
      console.log(form);
    } else {
      alert("Preencha os dados");
    }
  };

  useEffect(() => {
    if (form.name === "") {
      navigate("/");
    }

    dispatch(setCurrentStep(2));
  }, [dispatch, form.name, navigate]);

  return (
    <Base>
      <Typography sx={{ color: "#b8b8d4" }} variant="body1">
        passo 3/3
      </Typography>
      <Typography sx={{ color: "#b8b8d4", mt: 2 }} variant="h3">
        Tudo ok {form.name}, informe alguns dados de contato
      </Typography>
      <Typography sx={{ color: "#b8b8d4", mt: 2 }} variant="body2">
        Preencha os dados para poder-mos entrar em contato.
      </Typography>
      <hr />
      <Box sx={{ display: "flex", flexDirection: "column", pt: "20px" }}>
        <Input
          id="outlined-required"
          value={form.email}
          placeholder="Digite seu Email"
          onChange={handleEmailChange}
          sx={{ mt: 2, mb: 2, color: "white" }}
        />
        <Input
          id="outlined-required"
          placeholder="Digite seu Github"
          value={form.github}
          onChange={handleGithubChange}
          sx={{ mt: 2, mb: 2, color: "white" }}
        />
        <Button onClick={handleNextButton} variant="contained">
          Finalizar Cadastro
        </Button>
      </Box>
    </Base>
  );
};

export default FormStep1;
