import { Box, Chip, Grid, Typography, Button as MaterialButton } from "@material-ui/core";
import { useEditor } from "@craftjs/core";
export const SettingsPanel = () => {
  const { selected } = useEditor((state) => {
    const currentNodeId = state.events.selected;
    let selected;
    if ( currentNodeId ) {
        selected = {
          id: currentNodeId,
          name: state.nodes[currentNodeId].data.name,
          settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
          isDeletable: query.node(currentNodeId).isDeletable()
        };
      }
    return {
      selected
    }
  });
  return selected ? (    
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
      {
          selected.isDeletable ? (
            <MaterialButton
              variant="contained"
              color="default"
              onClick={() => {
                actions.delete(selected.id);
              }}
            >
              Delete
            </MaterialButton>
          ) : null
        }
      </Grid>
    </Box>
  ) : null
}