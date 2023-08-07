const mqtt = require('mqtt');

// MQTT broker details
const brokerUrl = '';
const port = 1883;
const topic = 'new_topic'; // Replace with the actual topic you want to subscribe to

// Create a client instance
const client = mqtt.connect(brokerUrl, { port });

// Callback for when the client connects
client.on('connect', () => {
  console.log('Connected to MQTT broker');
  // Subscribe to the desired topic
  client.subscribe(topic);
});

// Callback for when a message is received
client.on('message', (receivedTopic, message) => {
  if (receivedTopic === topic) {
    // Handle the received message/response
    console.log('Received message:', message.toString());
    // You can process the message here as needed
  }

  if (receivedTopic ==="new") {
    console.log('Received message:', message.toString());
  }
});

// Callback for when the client disconnects
client.on('close', () => {
  console.log('Disconnected from MQTT broker');
});

// Handle errors
client.on('error', (error) => {
  console.error('Error:', error);
});
