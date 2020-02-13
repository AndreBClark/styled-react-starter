// components/user/Button.js
import React  from "react";
import {Button as MaterialButton} from "@material-ui/core";
export const Button = ({size, variant, color, children}) => {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  )
}