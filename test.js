const mqtt = require('mqtt');

const brokerUrl = 'mqtt://tr.atrehealthtech.com'; // Replace with your MQTT broker's IP address
const topic = 'my/new/topic';
const newtopic = 'topic';
const message = 'Hello, MQTT from Node.js!';
const newmessage = '00000000000000000000000000000.js!';

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('Connected to MQTT broker');

    // Publish a message to the new topic
    client.publish(newtopic, message, (err) => {
        if (err) {
            console.error('Error publishing:', err);
        } else {
            console.log(`Published to topic ${topic}: ${message}`);
            
        }
    });

    client.publish(topic, newmessage, (err) => {
        if (err) {
            console.error('Error publishing:', err);
        } else {
            console.log(`Published to topic ${topic}: ${newmessage}`);
            client.end(); // Close the connection
        }
    });

});

client.on('error', (err) => {
    console.error('Connection error:', err);
    client.end(); // Close the connection
});
