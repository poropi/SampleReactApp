import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { SigninState } from '../states/SigninState';
import { SigninActions } from '../containers/signinContainer';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions/transition';

interface OwnProps {}

const useStyles = makeStyles((theme: Theme) => createStyles({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type SigninProps = OwnProps & SigninState & SigninActions;

const TransitionUp = function (props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

export const SigninComponent: React.SFC<SigninProps> = (props: SigninProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={props.email}
            onChange={(e) => {props.updateEmail(e.target.value)}}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={props.password}
            onChange={(e) => {props.updatePassword(e.target.value)}}
            autoComplete="current-password"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{props.signin()}}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Snackbar
        open={props.isOpen}
        onClose={() => {props.closeNotification()}}
        TransitionComponent={TransitionUp}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Success login!!!</span>}
      />
    </Container>
  );
};