const { postmodel, usermodel, allstudent, sucesspement } = require("../models/postmodel");



const postcontrollers = async (req, res) => {
    try {
        const post = new postmodel({
            name: req.body.name,
            email: req.body.email,
            sit: req.body.sit,
            price: req.body.price,
            image: req.body.img,
        })
        const savepost = await post.save();
        if (savepost) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: savepost })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

// all teacher list

const allitemslist = async (req, res) => {
    const email = req.params.token;
    try {
        const post = await postmodel.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}



const getControler = async (req, res) => {
    const email = req.params.token;
    try {
        const post = await postmodel.find({ email: email });
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}


// delet post 
const deletPost = async (req, res) => {
    try {
        const id = req.params.id;
        await postmodel.deleteOne({ _id: id })
        res.status(200).send({ success: true, mgs: 'Post delet successfully' })
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}


// upded

const updedpost = async (req, res) => {
    console.log(req.body)
    try {
        if (req.file !== undefined) {
            const name = req.body.name;
            const sit = req.body.sit;
            const price = req.body.price;
            const image = req.file.filename;
            const id = req.body.id;
            await postmodel.findByIdAndUpdate({ _id: id }, { $set: { name: name, image: image, sit: sit, price: price } })
            res.status(200).send({ success: true, mgs: 'upded successw fully' })
        } else {
            const name = req.body.name;
            const id = req.body.id;
            const sit = req.body.sit;
            const price = req.body.price;
            await postmodel.findByIdAndUpdate({ _id: id }, { $set: { name: name, sit: sit, price: price } })
            res.status(200).send({ success: true, mgs: 'upded successw fully' })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: 'passi na' })
    }
}

const loginuserdata = async (req, res) => {

    try {
        const post = new usermodel({
            name: req.body.name,
            img: req.body.img,
            Status: req.body.Status,
            email: req.body.email
        })
        const savepost = await post.save();
        if (savepost) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: savepost })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

// teachers data

const allteacher = async (req, res) => {
    try {
        const post = await postmodel.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const admin1 = async (req, res) => {
    try {
        const post = await postmodel.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const admin2 = async (req, res) => {
    try {
        const post = await usermodel.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const admin3 = async (req, res) => {
    try {
        const post = await allstudent.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const admin4 = async (req, res) => {
    try {
        const post = await sucesspement.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}




// student dasbord

const studentdasbord = async (req, res) => {
    const email = req.params.email
    try {
        const post = await allstudent.find({ semail: email });
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}




const studentpement = async (req, res) => {
    const email = req.params.email

    // try {
    //     const post = await postmodel.find({ id: email });
    //     if (post) {
    //         res.status(200).send({ success: true, mgs: 'user is saved', data: post })
    //     }
    // } catch (error) {
    //     res.status(404).send({ success: false, mgs: error.message })
    // }
}




// single teachers


const singleteacher = async (req, res) => {
    try {
        const post = await usermodel.find({ Status: 'Teachers' });
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const singlestudent = async (req, res) => {
    try {
        const post = await usermodel.find({ Status: 'Student' });
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const singleadmin = async (req, res) => {
    try {
        const post = await usermodel.find({ Status: 'Admin' });
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const uuid = require('uuid')
const uniqueRandomID = uuid.v4()

// pement getway

const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = 'sudip648205dd902c0'
const store_passwd = 'sudip648205dd902c0@ssl'
const is_live = false //true for live, false for sandbox


const pementGetWay = (req, res) => {

    const data = {
        total_amount: 100,
        currency: 'USD',
        tran_id: uniqueRandomID, // use unique tran_id for each api call
        success_url: `/success/${req.params.user}`,
        fail_url: 'fail',
        cancel_url: 'cancel',
        ipn_url: 'ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {

        let GatewayPageURL = apiResponse.GatewayPageURL
        res.send(GatewayPageURL)
    });

}

const pementSucess = async (req, res) => {
    const id = req.params.id

    try {
        if (id) {
            const sucess = await postmodel.find({ _id: id })
            if (sucess) {
                const newObject = Object.assign({}, sucess)
                const post = new sucesspement({
                    name: newObject[0].name,
                    image: newObject[0].image,
                    email: newObject[0].email,
                    sit: newObject[0].sit,
                    price: newObject[0].price,
                    semail: id,
                })
                const savepost = await post.save();
                if (savepost) {
                    res.redirect(`http://localhost:5173/success/${id}`)
                }

            }
        } else {

        }

    } catch (error) {
        
    }


}

const fail = (req, res) => {
    res.redirect('http://localhost:5173/fail')
}

const cancel = (req, res) => {
    res.redirect('http://localhost:5173/cansil')
}



// pementsucess











const pementsucess = async (req, res) => {
    try {

    } catch (error) {

    }

}


const pementstudent = async (req, res) => {
    const email = req.params.email
    try {
        const post = await sucesspement.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}






//sslcommerz init

// all student

const studentData = async (req, res) => {
    try {
        const post = new allstudent({
            sname: req.body.sname,
            semail: req.body.semail,
            simage: req.body.simage,
            time: req.body.time,
            image: req.body.image,
            email: req.body.email,
            name: req.body.name,
            sit: req.body.sit,
            price: req.body.price,
        })
        const savepost = await post.save();
        if (savepost) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: savepost })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}


// studentdas
const studentdas = async (req, res) => {
    try {
        const id = req.params.id;
        await allstudent.deleteOne({ _id: id })
        res.status(200).send({ success: true, mgs: 'Post delet successfully' })
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}











module.exports = {
    postcontrollers,
    getControler,
    deletPost,
    updedpost,
    loginuserdata,

    // single data
    singleteacher,
    singlestudent,
    singleadmin,

    // all teachers
    allteacher,


    // pement getway
    pementGetWay,

    pementSucess,
    fail,
    cancel,

    // all student
    studentData,
    studentdasbord,
    studentdas,
    studentpement,

    pementsucess,


    // all teacher

    allitemslist,

    pementstudent,

    // admin
    admin1,
    admin2,
    admin3,
    admin4,
}