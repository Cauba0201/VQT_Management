import { ListItem, ListItemText, ListItemAvatar } from "@mui/material";

interface Props {
  title: string;
  description: string;
  time: string;
  avatar: unknown;
}

const NewItems: React.FC<Props> = ({ title, description, time }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        {/* <Avatar src={avatar} /> */}
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <>
            <span>{description}</span>
            <br />
            <span>{time}</span>
          </>
        }
      />
    </ListItem>
  );
};

export default NewItems;
