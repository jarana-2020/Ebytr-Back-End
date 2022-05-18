import express from 'express';

const api = express();

api.use(express.json());

api.get('/', (_req, res) => res.send());

export default api;