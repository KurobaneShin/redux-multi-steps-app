import React, { useEffect } from "react";
import Base from "../../components/base";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

import { setCurrentStep, setLevel } from "../../features/form/formSlice";

import SelectOption from "../../components/selectOptions";

const FormStep2 = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useAppSelector((state) => state.form);

  const handleNextButton = () => {
    form.name !== "" ? navigate("/step3") : alert("Preencha os dados");
  };

  const setThisLevel = (level: 0 | 1) => {
    dispatch(setLevel(level));
  };

  useEffect(() => {
    if (form.name === "") {
      navigate("/");
    }

    dispatch(setCurrentStep(1));
  }, [dispatch, form.name, navigate]);

  return (
    <Base>
      <Typography sx={{ color: "#b8b8d4" }} variant="body1">
        passo 2/3
      </Typography>
      <Typography sx={{ color: "#b8b8d4", mt: 2 }} variant="h3">
        {form.name}, o que melhor descreve você?
      </Typography>
      <Typography sx={{ color: "#b8b8d4", mt: 2 }} variant="body2">
        Escolha a opção que melhor condiz com seu estado profissional atual.
      </Typography>
      <hr />
      <Box sx={{ display: "flex", flexDirection: "column", pt: "20px" }}>
        <SelectOption
          title="Sou Iniciante"
          description="Comecei a programar há menos de 2 anos"
          selected={form.level === 0}
          onClick={() => setThisLevel(0)}
        />
        <SelectOption
          title="Sou Experiente"
          description="Já programo há 2 anos ou mais"
          selected={form.level === 1}
          onClick={() => setThisLevel(1)}
        />
        <Box>
          <Link to="/">
            <Button sx={{ width: "100px", mr: 2 }} onClick={handleNextButton}>
              Voltar
            </Button>
          </Link>

          <Button
            sx={{ width: "100px" }}
            onClick={handleNextButton}
            variant="contained"
          >
            Proximo
          </Button>
        </Box>
      </Box>
    </Base>
  );
};

export default FormStep2;
