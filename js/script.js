// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01-Isaac-Ip/sw.js", {
    scope: "/ICD2O-Unit-6-01-Isaac-Ip/",
  })
}

/**
 * This function selects a random number depending on the user's choice.
 */
function generateNumber () {
  // generate random number
  const randomNumber = Math.floor(Math.random() * 6) + 1

  // input
  const numberType = document.getElementById('option-positive').checked

  // process
  if (numberType == true) {
    // output
    document.getElementById('result').innerHTML = 'The random number is: ' + randomNumber
  } else {
    // output
    document.getElementById('result').innerHTML = 'The random number is: ' + (-1 * randomNumber)
  }
}
