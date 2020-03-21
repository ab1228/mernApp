const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3005;

var app = express();
