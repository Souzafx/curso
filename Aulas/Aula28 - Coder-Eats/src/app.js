import Express from 'express';
import mongoose from 'mongoose';
import UsersRouter from './routers/users-router.js';
import BusinessRouter from './routers/business-router.js';
import OrderRouter from './routers/orders-router.js';

const PORT = 8080;

const app = express();
app.user(express.json());
app.user(express.urlencoded({ extended: true }));

const mongoURL = //'link do mongo'
const connection = await mongoose.connect(mongoUrl)
    .then(() => { console.log("connected to mongoDB") })
    .catch((error) => {
        if (error) {
            console.log("Cannot connect to MongoDB:" + error);
            process.exit();
        }
    });

app.use('/api/users', UsersRouter);
app.use('/api/business', BusinessRouter);
app.use('/api/orders', OrdersRouter);

app.listen(PORT, () => {
    console.log(`Coder-Eats: Ouvindo a Porta ${PORT}`);
});
