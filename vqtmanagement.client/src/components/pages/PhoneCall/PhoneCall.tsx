import {  Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { AccountInfo } from "../../common/AccountInfo";
import { AccountDetailsForm } from "../../common/AccountDetails";
import { CustomersTable } from "../../common/CustomerTable";

const PhoneCall = () => {
  return (
    <Stack spacing={3} sx={{marginTop: "20px"}}>
      <Box >
        <Typography variant="h4">Account Manager</Typography>
      </Box>
      <Grid container  spacing={3}>
        <Grid lg={4} md={6} xs={12}>
          <AccountInfo />
        </Grid>
        <Grid lg={8} md={6} xs={12} >
          <AccountDetailsForm />
        </Grid>
      </Grid>
      <Divider /> 
      <Box >
        <Typography variant="h4">User Manager</Typography>
      </Box>
      <CustomersTable/>
    </Stack>
  );
};

export default PhoneCall;
