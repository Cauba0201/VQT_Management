import {
  Grid,
  Select,
  OutlinedInput,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  CardHeader,
  CardContent,
  CardActions,
  Card,
  Button,
} from "@mui/material";

const states = [
  { value: "alabama", label: "Alabama" },
  { value: "new-york", label: "New York" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "los-angeles", label: "Los Angeles" },
] as const;

export function AccountDetailsForm(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card
        sx={{ marginLeft: "10px", marginRight: "10px", borderRadius: "10px" }}
      >
        <CardHeader sx={{ fontWeight: "bold" }} title="Profile" />
        <Divider variant="middle" />
        <CardContent sx={{ height: "250px" }}>
          <Grid container>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth required>
                <InputLabel>First name</InputLabel>
                <OutlinedInput
                  defaultValue="Nguyen"
                  label="First name"
                  name="firstName"
                  sx={{ borderRadius: "30px" }}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth required>
                <InputLabel>Last name</InputLabel>
                <OutlinedInput
                  defaultValue="An"
                  label="Last name"
                  name="lastName"
                  sx={{ borderRadius: "30px" }}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth required>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput
                  defaultValue="nguyenan@viettel.com.vn"
                  label="Email address"
                  name="email"
                  sx={{ borderRadius: "30px" }}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth>
                <InputLabel>Phone number</InputLabel>
                <OutlinedInput
                  label="Phone number"
                  name="phone"
                  type="tel"
                  sx={{ borderRadius: "30px" }}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  defaultValue="New York"
                  label="State"
                  name="state"
                  variant="outlined"
                  sx={{ borderRadius: "30px" }}
                >
                  {states.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      // sx={{ borderRadius: "30px" }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} sx={{ padding: "5px" }}>
              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <OutlinedInput label="City" sx={{ borderRadius: "30px" }} />
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
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
