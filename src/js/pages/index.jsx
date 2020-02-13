import React from 'react';
import ReactDOM from 'react-dom';
import {Typography, Paper, Grid} from '@material-ui/core';
import { Toolbox } from '../components/Toolbox';
import { SettingsPanel } from '../components/SettingsPanel';
import { Container } from '../components/user/Container';
import { Button } from '../components/user/Button';
import { Card } from '../components/user/Card';
import { Text } from '../components/user/Text';
import {Editor, Frame, Canvas} from "@craftjs/core";

if (module.hot) {
  module.hot.accept();
}

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
        <Editor resolver={{Card, Button, Text, Container}}> 
          <Grid container spacing={3}>
            <Grid item xs>
              <Frame>
                <Canvas is={Container} padding={5} background="#eee">
                  <Card />
                  <Button size="small" variant="outlined">Click</Button>
                  <Text size="small" text="Hi world!" />
                  <Canvas is={Container} padding={6} background="#999">
                    <Text size="small" text="It's me again!" />
                  </Canvas>
                </Canvas>
              </Frame>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                  <Toolbox />
                  <SettingsPanel />
              </Paper>
            </Grid>
          </Grid>
        </Editor>
    </div>
  );
}
const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);