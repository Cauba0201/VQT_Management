import { Box, Grid, Stack } from "@mui/material";
import { AccountInfo } from "../../common/AccountInfo";
import { AccountDetailsForm } from "../../common/AccountDetails";
import { CustomersTable } from "../../common/CustomerTable";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  createdAt: string;
  author: string;
}

const AccountManager: React.FC = () => {
  const [customers, setCustomers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get<UserData[]>(
          "https://localhost:7074/api/User"
        );
        setCustomers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching customers", error);
      }
    };
    fetchCustomers();
  }, []);

  const handleAddUser = (newUser: UserData) => {
    setCustomers((prevCustomers) => [...prevCustomers, newUser]);
  };
  return (
    <Stack spacing={2} sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          bgcolor: "#d9d9d9",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <Grid container spacing={3}>
            <Grid lg={4} md={6} xs={12}>
              <AccountInfo />
            </Grid>
            <Grid lg={8} md={6} xs={12}>
              <AccountDetailsForm onAddUser={handleAddUser} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#d9d9d9", borderRadius: "10px", padding: "20px" }}>
        <CustomersTable customers={customers} />
      </Box>
    </Stack>
  );
};

export default AccountManager;
