import React  from "react";
import Text from "./Text";
import Button from "./Button";
import { Canvas, useNode } from "@craftjs/core";
import { Container }  from "./Container";
// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.
export const CardTop = ({children}) => {
    const { connectors: {connect} } = useNode();
    return (
        <div ref={connect} className="text-only">
            {children}
        </div>
    )
}
CardTop.craft = {
    rules: {
        // Only accept Text
        canMoveIn: (incomingNode) => incomingNode.data.type == Text
    }
}
export const CardBottom = ({children}) => {
    const { connectors: {connect} } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}
CardBottom.craft = {
    rules: {
        // Only accept Buttons
        canMoveIn : (incomingNode) => incomingNode.data.type == Button
    }
}
export const Card = ({background, padding = 20}) => {
    return (
        <Container background={background} padding={padding}>
        <Canvas id="text" is={CardTop}>
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </Canvas>
            <Canvas id="buttons" is={CardBottom}>
                <Button size="small" text="Learn more" />
            </Canvas>
        </Container>
    )
}