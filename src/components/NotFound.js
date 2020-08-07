import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Avatar, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: { height: "100vh" },
  avatar: {
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  const { goBack } = useHistory();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Avatar
        src="/assets/not-found.png"
        alt="Not Found"
        variant="square"
        className={classes.avatar}
      />

      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIosIcon />}
          onClick={goBack}
        >
          Go Back
        </Button>
      </Box>
    </Grid>
  );
};

export default NotFound;
