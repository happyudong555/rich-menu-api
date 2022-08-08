const functions = require('firebase-functions');
const cors = require('cors');
const admin = require('firebase-admin');
const port = 8000;
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const line = require('@line/bot-sdk');
const firebaseConfig = {
    apiKey: "AIzaSyCiZTRKS9pi-j2avTGeTHtDkDIg_h6phA8",
    authDomain: "pazzypay.firebaseapp.com",
    databaseURL: "https://pazzypay-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pazzypay",
    storageBucket: "pazzypay.appspot.com",
    messagingSenderId: "365768663568",
    appId: "1:365768663568:web:124e9444f18658d029a095",
    measurementId: "G-559J1LVMPW"
};
// Initialize Firebase
admin.initializeApp(firebaseConfig);
let db = admin.database()
// parse body params and attache them to req.body
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization');
    next()
});
const config = {
    channelAccessToken: "V5fl2cxr0BxbaG/p6mgQDPjT6r2TR6LnINDdnKI95kYELpNzU5IARsJniJCIcFXr5yWjee1Z8+eX1jkEsdKPepWL8YS4DR9sU6pZKETAS/4r7c0V/LJHKpPZwYpx8UqX2jFeN+QnP2MksPR2O/WfZgdB04t89/1O/w1cDnyilFU=",
    channelSecret: "7a96bd2a56589e377da01f36bd784471"
}
const client = new line.Client(config);
app.post('/newUser', (req, res) => {
    const rich_menu_id = "richmenu-a49ac929e28e6b83c334a9bb39dbc25d";
    let sendAPI = client.linkRichMenuToUser(req.body.id, rich_menu_id);
    res.status(200).send(sendAPI);
});
app.post('/richMenu', (req, res) => {
    const rich_menu_id = "richmenu-9acdfedaa4657ee2ec96bdccd0af25c5";
    let sendAPI = client.linkRichMenuToUser(req.body.id, rich_menu_id);
    res.status(200).send(sendAPI);
});
exports.pazzyAPI = functions.region('asia-southeast1').https.onRequest(app);