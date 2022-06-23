import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../app/hooks";

const steps = [
  {
    label: "Pessoal",
    description: `Se identifique.`,
  },
  {
    label: "Profissional",
    description: "Seu Nivel.",
  },
  {
    label: "Contatos",
    description: `Como te contatar.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const form = useAppSelector((state) => state.form);

  useEffect(() => {
    setActiveStep(form.currentStep);
  }, [form.currentStep]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label.Mui-active": {
                  color: "white",
                },
                "& .MuiStepLabel-label.Mui-disabled": {
                  color: "white",
                },
              }}
              optional={
                index === 2 ? (
                  <Typography
                    component={"span"}
                    sx={{ color: "white" }}
                    variant="caption"
                  >
                    Ultimo Passo
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography component={"span"}>{step.description}</Typography>
              <Box sx={{ mb: 2 }}></Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography component={"span"}>
            All steps completed - you&apos;re finished
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
