const USER=require("../models/user");
const WORK=require("../models/work");
const nodemailer = require('nodemailer');

async function handleEnquiry(req,res)
{
    const body=req.body;
     console.log("body",body);
    if(!body ||
        !body.name ||
        !body.email ||
        !body.inquiry)
        {
            return res.status(400).json({
                error: "Data Not complete",
            });
        }
    
    const result=await USER.create({
        name: body.name,
        email: body.email,
        inquiry: body.inquiry,
    });


    //email

    

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '0kanisak.uc@gmail.com',
        pass: 'dnfb fcnz zvke uhed'
    }
    });

    var mailOptions = {
    from: 'youremail@gmail.com',
    to: '0kanisak.uc@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });


    //




    if(result)
    {
        return res.json({ 
            message: " New enquiry Created",
            id :result._id,
        });
    }
    else
        return res.json({message:" enquiry not created"});
}


async function handleAdmin(req,res)
{
    const body=req.body;
    console.log(body);
    if(!body ||
        !body.email ||
        !body.pass)
        {
            return res.status(400).json({
                error: "Data Not complete",
            });
        }

    const email=body.email;
    const password=body.pass;
    console.log(body);
    if(email=="admin@alphazeal.com" && password=="987654321a@A")
        return res.status(201).json({ "msg": "Admin Portel Access Permited" });
    
    return res.status(401).json({"msg":"Something is wrong"});
}


async function handleWork(req,res)
{
    const body=req.body;
    console.log("body",body);
    if(!body ||
        !body.link ||
        !body.title ||
        !body.desc)
        {
            return res.status(401).json({
                error: "Data Not complete",
            });
        }
    
    const result=await WORK.create({
        link: body.link,
        title: body.title,
        description: body.desc,
    });
    if (result)
        return res.status(201).json({ "msg": result }); 
    return res.json({message:" WORK NOT ADDED"});
}


async function handleAllData(req, res) {
    const data = await USER.find({});
    console.log(data);
    if (data)
        return res.status(201).json({ "msg": data });

    return res.status(401).json({ "msg": "something went wrong" });
}

async function handleAllWork(req, res) {
    const data = await WORK.find({});
    console.log(data);
    if (data)
        return res.status(201).json({ "msg": data });

    return res.status(401).json({ "msg": "something went wrong" });
}






module.exports={
    handleEnquiry,
    handleWork,
    handleAdmin,
    handleAllData,
    handleAllWork
};
