export const aboutFn = (req, res) => {
    res.send("About Page");
}

export const contactFn = (req, res) => {
    const userData = [
        {
            name: "John",
            email: "j@j.com",
            phone: "1234567890"
        },
        {
            name: "Jane",
            email: "j@j.com",
            phone: "1234567890"
        },
        {
            name: "Jim",
            email: "j@j.com",
            phone: "1234567890"
        }
    ];
    res.send(JSON.stringify(userData));
}

export const dataFn = (req, res) => {
    try {
        const info = [
            {
                name: "John",
                email: "j@j.com",
                phone: "1234567890",
                age: 23,
                gender: "Male",
                city: "Delhi",
                country: "India"
            },
            {
                name: "Jane",
                email: "j@j.com",
                phone: "1234567890",
                age: 23,
                gender: "Female",
                city: "Delhi",
                country: "India"
            },
            {
                name: "Jim",
                email: "j@j.com",
                phone: "1234567890",
                age: 23,
                gender: "Male",
                city: "Delhi",
                country: "India"
            },
            {
                name: "Jill",
                email: "j@j.com",
                phone: "1234567890",
                age: 23,
                gender: "Female",
                city: "Delhi",
                country: "India"
            }
        ];
        res.status(200).json({
            data: info,
            message: "Fetch user Data",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

export const abc = (req, res) => {
    try{
        console.log(req.body);
        res.send(201).json({
            message: "Data Inserted",
            success: true
        })
    }catch(error){
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}