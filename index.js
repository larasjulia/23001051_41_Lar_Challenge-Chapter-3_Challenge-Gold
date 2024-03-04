const express = require('express');
const app = express();
const path = require('path')
const axios = require('axios')
const db = require('./db');
const e = require('express');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


//START API
//API GET
app.get('/api/v1/employee', async (req, res) => {
    const employee = await
    db('employee').select('*');
    return res.json({ data: employee });
});

//API GET /:ID
app.get('/api/v1/employee/:employeeId', async (req, res) => {
    const { employeeId } = req.params;

    const employee = await
    db('employee').select('*').where({
        employeeId: employeeId,
    }).first();

    return res.json({ data: employee });
});


//API POST
app.post('/api/v1/employee', async (req, res) => {
    const { name, position, birth, phone, email, address } = req.body;

    const employee = await
    db('employee').insert({
        name: name,
        position: position,
        birth: birth,
        phone: phone,
        email: email,
        address: address,
    }).returning(['employeeId']);

    return res.json({
        message: 'Data added successfully',
        data: { employeeId: employee[0].employeeId, name: name, position: position, birth: birth, phone: phone, email: email, address: address },
    });
});

//API PUT
app.put('/api/v1/employee/:employeeId', async (req, res) => {
    const { employeeId } = req.params;

    const { name, position, birth, phone, email, address } = req.body;

    await db('employee').where({
        employeeId: employeeId,
    }).update({
        name: name,
        position: position,
        birth: birth,
        phone: phone,
        email: email,
        address: address,
    });

    return res.json({
        message: 'Data added successfully',
        data: { employeeId: employeeId, name: name, position: position, birth: birth, phone: phone, email: email, address: address},
    });
});

//API DELETE
app.delete('/api/v1/employee/:employeeId', async (req, res) => {
    const { employeeId } = req.params;

    await db('employee').where({
        employeeId: employeeId,
    }).del();
    return res.json({
        message: 'Employee data has been successfully deleted'
    });
});
//=========END API========

//====Start View=====
app.get('/admin', async (req, res) => {
    return res.render('indexAdmin');
});

app.get('/employeeAdmin', async (req, res) => {
    const employee = await
    db('employee').select('*');
    // console.log(employee)
    return res.render('employeeAdmin', {employee});
});

app.post('/employeeAdmin', async (req, res) => {
    // codinga nmenyimpan employee
    const employee = await
    db('employee').insert({
        name: req.body.name,
        position: req.body.position,
        birth: req.body.birth,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
    }).returning(['employeeId']);
    return res.redirect('employeeAdmin')
})

app.get('/leave', async (req, res) => {
    return res.render('leave');
})

app.get('/leaveAdmin', async (req, res) => {
    const leave = await
    db('leave').select('*')
    return res.render('leaveAdmin', {leave});
});

app.post('/leave', async (req, res) => {
    const leave = await
    db('leave').insert({
        employeeId: req.body.employeeId,
        date: req.body.date,
    }).returning(['leaveId']);
    return res.redirect('leaveAdmin')
})

app.get('/attendanceAdmin', async (req, res) => {
    const attendance = await
    db('attendance').select('*')
    return res.render('attendanceAdmin', {attendance});
});

app.get('/', async (req, res) => {
    return res.render('index');
});

app.post('/', async (req, res) => {
    const attendance = await
    db('attendance').insert({
        employeeId: req.body.employeeId,
        date: req.body.date,
    }).returning(['attendanceId']);
    return res.redirect('attendanceAdmin')
})

app.get('/logout', async (req, res) => {
    return res.render('logout');
});

app.get('/login', async (req, res) => {
    return res.render('login');
});


//=====END VIEW=====

app.listen(3008, () => {
    console.log('Server is running on port 3008');
});