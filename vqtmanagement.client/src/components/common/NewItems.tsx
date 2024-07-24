import { ListItem, ListItemText, Avatar, ListItemAvatar } from "@mui/material";
// import newItems from '../../data/mockData'
const Props = {
  title: string,
  description: string,
  time: string,
  avatar: string,
};

const NewItems = ({ title, description, time, avatar }: Props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={avatar} />
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
