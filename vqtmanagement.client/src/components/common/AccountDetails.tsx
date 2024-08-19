import {
  Grid,
  FormControl,
  Divider,
  CardHeader,
  CardContent,
  CardActions,
  Card,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const states = [
  { value: "none", label: "--Author--" },
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
] 

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  author: string
}

interface AccountDetailsFormProps {
  onAddUser: (user: UserData) => void;
}

export function AccountDetailsForm({
  onAddUser,
}: AccountDetailsFormProps): React.JSX.Element {
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    author:"",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: string }>
  ) => {
    const { name, value } = event.target as HTMLInputElement;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://localhost:7074/api/User", {
        ...userData,
      });
      onAddUser(response.data.Data);
      console.log(response.data.Data);
    } catch (error) {
      console.error("Error creating User", error);
    }
  };

  const handleSave = async (event:React.FormEvent) => {
    event.preventDefault();

    try {
      const update = await axios.put(`https://localhost:7074/api/User/${userData.id}`,{
        ...userData
      })
      onAddUser(update.data.Data);

    } catch (error) {
      console.error("Error saving user",error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card
        sx={{ marginLeft: "10px", marginRight: "10px", borderRadius: "10px" }}
      >
        <CardHeader sx={{ fontWeight: "bold" }} title="Profile" />
        <Divider variant="middle" />
        <CardContent sx={{ height: "250px" }}>
          <Grid container>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth required>
                {/* <InputLabel>Name</InputLabel> */}
                <TextField
                  value={userData.firstName}
                  onChange={handleInputChange}
                  label="Name"
                  name="firstName"
                  sx={{ borderRadius: "30px" }}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth required>
                <TextField
                  value={userData.lastName}
                  onChange={handleInputChange}
                  label="Location"
                  name="lastName"
                  sx={{ borderRadius: "30px" }}

                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth required>
                <TextField
                  value={userData.email}
                  onChange={handleInputChange}
                  label="Email "
                  name="email"
                  sx={{ borderRadius: "30px" }}

                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth>
                <TextField
                  label="Phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  name="phone"
                  sx={{ borderRadius: "30px" }}

                />
              </FormControl>
            </Grid>
            
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth>
                <TextField
                  label="Time"
                  // value={userData.city}
                  name="Time"
                  sx={{ borderRadius: "30px" }}
                  onChange={handleInputChange}

                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth>
                <TextField
                  value={userData.state}
                  select
                  defaultValue="none"
                  onChange={handleInputChange}
                  // label="Author"
                  name="state"
                  sx={{ borderRadius: "30px" }}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {states.map((option) => (
                    <option  key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider variant="middle" />
        <CardActions sx={{ justifyContent: "flex-end", marginRight: "20px" }}>
          <Button
            sx={{
              borderRadius: "10px",
              width: "6vw",
            }}
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
