// main antry for app
import express from 'express';
import 'dotenv/config'
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from 'discord-interactions';

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
// app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

app.get('/name', async function (req, res) {
  res.send( {
    type: "application/json",
    data: {
      name: "joe",
    },
  });
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});