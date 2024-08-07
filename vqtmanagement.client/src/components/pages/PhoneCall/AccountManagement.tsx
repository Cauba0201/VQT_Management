import { Box, Grid, Stack } from "@mui/material";
import { AccountInfo } from "../../common/AccountInfo";
import { AccountDetailsForm } from "../../common/AccountDetails";
import { CustomersTable } from "../../common/CustomerTable";

const AccountManager = () => {
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
              <AccountDetailsForm />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#d9d9d9", borderRadius: "10px", padding: "20px" }}>
        <CustomersTable />
      </Box>
    </Stack>
  );
};

export default AccountManager;
