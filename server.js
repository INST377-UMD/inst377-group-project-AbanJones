// server.js

const express = require('express');
const supabase = require('@supabase/supabase-js');

const app = express();
const port = 3000;

const SUPABASE_URL = 'https://aimdavozxjinmeihpmuq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpbWRhdm96eGppbm1laWhwbXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1OTUyMzcsImV4cCI6MjAxODE3MTIzN30.n6u04UhpRLBcQPL0q1nzL7zoHaHixphhH3r_zvn3eIQ';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

app.get('/cities', async (req, res) => {
  const { data, error } = await supabaseClient
    .from('cities_duplicate')
    .select('city_name');

  if (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } else if(data) {
    res.send(data);
  }
});

app.get('/city/:cityName', async (req, res) => {
  const cityName = req.params.cityName;

  try {
    const { data, error } = await supabaseClient
      .from('cities_duplicate')
      .select('city_name, "longitude ", "latitude "')
      .eq('city_name', cityName)
      .limit(1);
    console.log(data)
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (data && data.length > 0) {
      res.send(data)
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
