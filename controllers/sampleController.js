const Sample = require("../models/Sample");

exports.createSample = async (req, res) => {
  try {
    const sample = new Sample({ name: req.body.name });
    await sample.save();
    res.status(201).json(sample);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSamples = async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
