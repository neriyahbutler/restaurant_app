const request = require('supertest');
const express = require('express');

const app = require('../../../../server')

app.use(express.json())
app.use("/tablequery/", require('../../../../routes/tableQueryRouter'))
app.use('/createaccount/', require('../../../../routes/createAccountRouter'))
app.use('/signin/', require('../../../../routes/signinRouter'))
app.use('/reservedtables/', require('../../../../routes/reservedTablesRouter'))
app.use('/selecttables/', require('../../../../routes/selectTableRouter'))

// test('Holiday Check Test (valid holiday)', async () => {

//     const response = await request(app).post('/tablequery/holidaycheck')
//         .send({
//             date: "20XX-12-25"
//         })
//     expect(response.status).toBe(200)
// })

// test('Holiday Check Test (fake holiday)', async () => {

//     const response = await request(app).post('/tablequery/holidaycheck')
//         .send({
//             date: "20XX-12-01"
//         })
//     expect(response.body.isHoliday).toBe(false)
// })

// test('Test creating an account', async () => {
//     const account = {
//         firstName: "test123",
//         lastName: "test123",
//         email: "test123@gmail.com",
//         phoneNumber: "9",
//         password: "test123"
//     }

//     const response = await request(app).post('/createaccount/newaccount')
//         .send({
//             account
//         })
//     expect(response.status).toBe(200)
// })

test('Sign in', async () => {
    const input = {
        username: "testing",
        password: "testing"
    }

    const response = await request(app).post('/signin/')
        .send({input})
    expect(response.status).toBe(200)
})

test('Checking reserved tables', async () => {
    const email = {
        email: "hi"
    }

    const response = await request(app).post('/reservedtables/')
        .send({email})
    expect(response.status).toBe(200)
})