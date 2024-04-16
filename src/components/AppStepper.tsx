import { Container, Box, Stepper, Step, StepLabel, Typography, Button, Paper, Grid, Card, CardHeader, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, FormLabel, Radio, RadioGroup, Slider, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { ResponsiveChartContainer, BarPlot, LinePlot, MarkPlot, ChartsXAxis } from '@mui/x-charts';
import { GridColDef, DataGrid } from '@mui/x-data-grid';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import * as React from 'react';


const steps = ['Table', 'Chart', 'Form'];

export function AppStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="md" >
      <Box sx={{ mt: 2 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
          )}
        </Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ mt: 2, width: '100%' }}>
              {activeStep === 0 && (
                <Table />
              )}

              {activeStep === 1 && (
                <Chart />
              )}

              {activeStep === 2 && (
                <Form />
              )}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}

function Table() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
}

function Chart() {
  return (
    <Paper elevation={3}>
      <ResponsiveChartContainer
        height={400}
        series={[
          {
            type: 'bar',
            data: [1, 2, 3, 2, 1],
          },
          {
            type: 'line',
            data: [4, 3, 1, 3, 4],
          },
        ]}
        xAxis={[
          {
            data: ['A', 'B', 'C', 'D', 'E'],
            scaleType: 'band',
            id: 'x-axis-id',
          },
        ]}
      >
        <BarPlot />
        <LinePlot />
        <MarkPlot />
        <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
      </ResponsiveChartContainer>
    </Paper>
  );
}

const options = [
  { label: "Computer Programmer", value: "Computer_programmer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "User Experience Designer", value: "user_experience_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
  { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
]

function Form() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item md={12}>
        <Card>
          <CardHeader title="Register Form"></CardHeader>

          <CardContent>
            <Grid item container spacing={1}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  onChange={(v) => console.log(v)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  onChange={(v) => console.log(v)}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Occupation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Occupation"
                    name="occupation"
                    onChange={(v) => console.log(v)}
                    >
                    <MenuItem>None</MenuItem>
                    {options.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="City"
                  variant="outlined"
                  fullWidth
                  name="city"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Country"
                  variant="outlined"
                  fullWidth
                  name="country"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <DatePicker
                  label="Date Picker"
                  name="Date Picker"
                  sx={{ width: '100%' }}
                  onChange={(v) => console.log(v)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TimePicker
                  label="Basic time picker"
                  sx={{ width: '100%' }}
                  onChange={(v) => console.log(v)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <DateTimePicker
                  label="Basic date time picker"
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Slider
                  size="small"
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="web">Web</ToggleButton>
                  <ToggleButton value="android">Android</ToggleButton>
                  <ToggleButton value="ios">iOS</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  type="password"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
