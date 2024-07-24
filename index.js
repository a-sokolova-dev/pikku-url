import express from 'express';
const app = express();

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at PORT ${PORT}`);
});
