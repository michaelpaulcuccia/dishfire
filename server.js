import express from 'express';
import mongoose from 'mongoose';
import config from './config.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

//parse req.body
app.use(express.json());

(async () => {
    try {
        const conn = await mongoose.connect(config.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDB Connected');

    } catch (err) {
        console.error(`Error: ${err.message}`);
        //exit process with failure
        process.exit(1);
    }
})();

//routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on Port: ${PORT}`);
})