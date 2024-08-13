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