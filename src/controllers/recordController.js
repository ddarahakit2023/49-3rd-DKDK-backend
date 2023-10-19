const express = require("express");
const recordService = require("../services/recordService");
const { throwError } = require("../utils/throwError");

const readRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const readRecord = await recordService.readRecord(Number(id));
    if (!readRecord) {
    return res.status(400).json({message : "NO_USER"});
    }
    res.status(200).json(readRecord);
  } catch (error) {
    console.log(error);
  }
};


const createRecord = async (req, res) => {
  try {
    const addRecord = req.body;
    const {
      userId,
      waterContent,
      workoutTime,
      currentWeight,
      muscleMass,
      bodyFat,
      maxHeartrate,
    } = addRecord;
    const createRecord = await recordService.createRecord(addRecord);
    return res.status(200).json(createRecord);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  readRecord,
  createRecord,
};
