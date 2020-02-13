// components/user/Container.js
import React from "react";
import { Paper } from "@material-ui/core";
export const Container = ({background, padding = 0, children}) => {
  return (
    <Paper style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Paper>
  )
}