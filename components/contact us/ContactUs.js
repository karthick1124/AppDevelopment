import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Paper 
      elevation={5} 
      style={{
        padding: '30px',
        margin: '30px auto',
        maxWidth: '600px',
        marginTop: '120px',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        borderRadius: '12px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '20px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              variant="outlined"
              InputLabelProps={{
                style: { color: '#555' },
              }}
              InputProps={{
                style: {
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              variant="outlined"
              InputLabelProps={{
                style: { color: '#555' },
              }}
              InputProps={{
                style: {
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              InputLabelProps={{
                style: { color: '#555' },
              }}
              InputProps={{
                style: {
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              InputLabelProps={{
                style: { color: '#555' },
              }}
              InputProps={{
                style: {
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '1.1em',
                borderRadius: '5px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactUs;
