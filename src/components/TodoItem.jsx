import { useState } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Paper } from "@mui/material";

export default function TodoItem({ todo, deleteTodo }) {
  const [checked, setChecked] = useState(false);

  return (
    <Paper
      style={{
        backgroundColor: checked ? "#3d5afe" : "",
        color: checked ? "white" : "",
        padding: "0.5em 0",
      }}
    >
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => deleteTodo(todo.id)}
          >
            <DeleteForeverIcon style={{ color: checked ? "white" : "" }} />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon onClick={() => setChecked(!checked)}>
            <Checkbox
              style={{
                backgroundColor: checked ? "#3d5afe" : "",
                color: checked ? "white" : "",
              }}
              edge="start"
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            primary={todo.name}
            style={{
              width: "200px",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-word",
            }}
          />
        </ListItemButton>
      </ListItem>
    </Paper>
  );
}
