import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormsubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Formik onSubmit={handleFormsubmit} initialValues={undefined}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="10px"
              marginTop="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                " & > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First name"
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last name"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              mt="10px"
              marginRight="30px"
            >
              <Button type="submit" color="success" variant="contained">
                UPDATE
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
