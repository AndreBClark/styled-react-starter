import React from 'react';
import ReactDOM from 'react-dom';
import { Typography, Paper, Grid, makeStyles } from "@material-ui/core";
import { Toolbox } from "../components/Toolbox";
import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardBottom, CardTop } from "../components/user/Card";
import { Text } from "../components/user/Text";
import { SettingsPanel } from "../components/SettingsPanel";
import { Editor, Frame, Canvas } from "@craftjs/core";
import { Topbar } from "../components/Topbar";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
    position: "fixed",
    width: "500px"
  }
}));
export default function App() {
  const classes = useStyles();

  return (
  <>
      <Editor 
        resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
      <div style={{ margin: "0 auto", width: "100%" }}>
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Canvas is={Container} padding={5} background="#eeeeee">
                <Card />
                <Button text="Click me" size="small" />
                <Text fontSize={20} text="Hi world!" />
                <Canvas is={Container} padding={6} background="#999999">
                  <Text size="small" text="It's me again!" />
                </Canvas>
              </Canvas>
            </Frame>
          </Grid>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
        </Grid>
      </div>
      </Editor>
      </>
  );
}
const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

if (module.hot) {
  module.hot.accept();
}