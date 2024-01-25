const Vocab = require("../models/VocabModel");

// Create a new vocab => /api/v1/vocab/new
exports.newVocab = async (req, res, next) => {
  const vocab = await Vocab.create(req.body);
  res.status(201).json({
    success: true,
    vocab,
  });
};

// Get all vocabs => /api/v1/vocabs
exports.getVocabs = async (req, res, next) => {
  const vocabs = await Vocab.find();
  res.status(200).json({
    success: true,
    vocabs,
  });
};

// Get User Vocab => /api/v1/vocabs/me
exports.getUserVocab = async (req, res, next) => {
  const vocabs = await Vocab.find({ user: req.user.id });
  res.status(200).json({
    success: true,
    vocabs,
  });
};

// Get single vocab details => /api/v1/vocab/:id
exports.getSingleVocab = async (req, res, next) => {
  console.log(req.params.word);
  const vocab = await Vocab.find({ word: req.params.word });
  // if (!vocab) {
  //   // return next(new ErrorHandler("No Vocab found with this ID", 404));
  //   res.status(400).json({
  //     success:true,
  //     msg:"No Vocab found with this ID"
  //   })
  // }
  res.status(200).json({
    success: true,
    // vocab,
  });
};