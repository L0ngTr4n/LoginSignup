const mongoose = require("mongoose");
const express = require("express");
const app = express();
const LogInCollection = require("./mongo");

const newCollection = [
    { name: 'Alice', email: "alice@gmail.com", password: "a1234", role: "customer" },
    { name: 'Bob', email: "bob@gmail.com", password: "a1234", role: "vendor"  },
    { name: 'Charlie', email: "charlie@gmail.com", password: "a1234", role: "shipper"  }
  ];

  LogInCollection.insertMany(newCollection)
  .then(() => console.log('Many documents saved'))
  .catch((error) => console.log(error.message));

