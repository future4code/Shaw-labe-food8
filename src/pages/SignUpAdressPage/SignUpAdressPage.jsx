import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoFuture from "../../assets/logoFuture.png";
import useForm from "../../hooks/useForm";
import { signUpAdress } from "../../services/user";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="initial" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUpAdress(form, clear, navigate);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logoFuture} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="street"
                onChange={onChange}
                value={form.street}
                fullWidth
                required
                label="Rua"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="number"
                label="Numero"
                onChange={onChange}
                value={form.number}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="neighbourhood"
                label="Apto/Bloco"
                onChange={onChange}
                value={form.neighbourhood}
                required
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="city"
                variant="outlined"
                onChange={onChange}
                value={form.city}
                label="Cidade"
                type="text"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="state"
                variant="outlined"
                onChange={onChange}
                value={form.state}
                label="Estado"
                type="text"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="complement"
                variant="outlined"
                onChange={onChange}
                value={form.complement}
                label="Complemento"
                type="text"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default SignUpForm;
