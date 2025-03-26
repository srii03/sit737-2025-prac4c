const express = require('express');
const winston = require('winston');
const Joi = require('joi');
const app = express();
const port = 3000;

// Logger Configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'calculator.log' })
  ]
});

// Validator schemas
const numberSchema = Joi.object({
  number: Joi.number().required()
});
const operationSchema = Joi.object({
  dividend: Joi.number().required(),
  divisor: Joi.number().required()
});

// Root route for testing the application
app.get('/', (req, res) => {
  res.send('Welcome to the Advanced Calculator Microservice!');
});

// Exponentiation
app.get('/exponentiation', (req, res) => {
  const { base, exponent } = req.query;
  if (!base || !exponent) {
    logger.error('Base and Exponent are required.');
    return res.status(400).send('Base and Exponent are required.');
  }

  const result = Math.pow(Number(base), Number(exponent));
  logger.info(`Exponentiation: ${base} ^ ${exponent} = ${result}`);
  res.json({ result });
});

// Square Root
app.get('/sqrt', (req, res) => {
  const { number } = req.query;
  const { error } = numberSchema.validate({ number });
  if (error) {
    logger.error('Invalid number parameter.');
    return res.status(400).send('Invalid number parameter.');
  }

  const result = Math.sqrt(Number(number));
  logger.info(`Square Root: √${number} = ${result}`);
  res.json({ result });
});

// Modulo
app.get('/modulo', (req, res) => {
  const { dividend, divisor } = req.query;
  const { error } = operationSchema.validate({ dividend, divisor });
  if (error) {
    logger.error('Invalid dividend or divisor parameters.');
    return res.status(400).send('Invalid dividend or divisor parameters.');
  }

  if (Number(divisor) === 0) {
    logger.error('Divisor cannot be zero.');
    return res.status(400).send('Divisor cannot be zero.');
  }

  const result = Number(dividend) % Number(divisor);
  logger.info(`Modulo: ${dividend} % ${divisor} = ${result}`);
  res.json({ result });
});

// Server
app.listen(port, () => {
  logger.info(`Calculator microservice running on http://localhost:${port}`);
});
