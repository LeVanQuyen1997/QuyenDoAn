const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mongoose = require('./database/connectDB');
const AccountRouter=require('./routers/account.router');
const Account=require('./models/account');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//static file
app.use(express.static(path.join(__dirname, 'public')));
//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/account',AccountRouter);
// app.use('/store',require('./routers/store.router'));
app.use('/product', require('./routers/product.router'));
app.use('/accountinfo',require('./routers/accountInfo.router'));
app.use('/groupCate', require('./routers/groupCate.router'));
app.use("/catelogy",require('./routers/catelogy.router'));
app.use('/bill',require("./routers/bill.router"));
app.use('/billinfo',require('./routers/billinfo.router'));
app.use('/dailyReceiveMoney',require('./routers/dailyReceiveMoney.router'));
app.use('/monthlyReceiveMoney',require('./routers/monthlyReceiveMoney.router'));



//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
