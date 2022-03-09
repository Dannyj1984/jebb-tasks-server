const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            'mongodb+srv://dannyjebb:Emilyj!984@cluster0.tguba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
