export const contactFn = (req, res) => {
    res.send('Contact');
}

export const testFn = (req, res)=> {
    res.send('Test');
}

export const userFn = (req, res) => {
    try{
        const data = [
            {
                id: 1,
                name: 'John',
                age: 30,
                email: 'Ljw5H@example.com'
            },
            {
                id: 2,
                name: 'Jane',
                age: 25,
                email: 'Ljw5H@example.com'
            }
        ]
        res.status(200).json({
            data: data,
            message: 'Fetched successfully',
            success: true
        });
    }catch(error){
        res.status(500).json({
            message:error.message,
            success: false
        })
    }
}

export const adduserFn = (req, res) => {
    try{
        console.log(req.body);

        res.status(201).json({
            message:"Data added",
            success: true
        })
    }catch(error){
        res.status(500).json({
            message:error.message,
            success: false
        })
    }
}