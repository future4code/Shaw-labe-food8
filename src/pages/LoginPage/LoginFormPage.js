import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoFuture from "../../assets/logoFuture.png";
import useForm from "../../hooks/useForm.js";
import { login } from "../../services/user.js";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";

const Copyright = () => {
  return (
    <Typography variant="body2" color="initial" align="center">
      {"Copyright © "}
      <Link color="initial" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginFormPage = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logoFuture} />
        <Typography component="h1" variant="h5"></Typography>
        <form className={classes.form} onSubmit={onSubmitForm}>
          <TextField
            name="email"
            value={form.email}
            onChange={onChange}
            margin="normal"
            required
            fullWidth
            variant="outlined"
            label="E-mail"
          />
          <TextField
            name="password"
            value={form.password}
            onChange={onChange}
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs onClick={() => goToSignUpPage(navigate)}>
              <Link href="#" variant="body2">
                Não Possui Cadastro? Clique Aqui
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginFormPage;
