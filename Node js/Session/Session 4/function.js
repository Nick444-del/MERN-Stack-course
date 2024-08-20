export const aboutFn = (req, res) => {
    res.send("About user");
}

export const userFn = (req, res) => {
    const user = [
        {
            id: 1,
            name: "John",
            age: 30,
            city: "New York",
            country: "USA",
            phone: "123-456-7890"
        },
        {
            id: 2,
            name: "Jane",
            age: 25,
            city: "London",
            country: "UK",
            phone: "987-654-3210"
        },
        {
            id: 3,
            name: "Bob",
            age: 40,
            city: "Paris",
            country: "France",
            phone: "555-555-5555"
        }
    ];
    res.send(JSON.stringify(user));
}

export const addUser = (req, res) => {
    try{
        console.log(req.body);

        res.status(201).json({
            message: "Data added",
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

export const getUser = (req, res) => {
    try{
        const id = req.params.id;
        const user = [
            {
                id: 1,
                name: "John",
                age: 30,
                city: "New York",
                country: "USA",
                phone: "123-456-7890"
            },
            {
                id: 2,
                name: "Jane",
                age: 25,
                city: "London",
                country: "UK",
                phone: "987-654-3210"
            },
            {
                id: 3,
                name: "Bob",
                age: 40,
                city: "Paris",
                country: "France",
                phone: "555-555-5555"
            }
        ];
        res.send(JSON.stringify(user[id-1]));
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}