
import express from 'express';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';
import taskRoutes from './routers/task.js';



console.log("MONGODBURI" ,process.env.MONGODBURI);

mongoose.connect(process.env.MONGODBURI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));





// const tasks = [
    //     {
        //         id: 1,
        //         title: 'Learn Node.js',
        //         completed: false
        //     },
        //     {
            //         id: 2,
            //         title: 'Learn Express',
            //         completed: false
            //     },
//     {
    //         id: 3,
    //         title: 'Learn MongoDB',
    //         completed: false
    //     },
    //     {
        //         id: 4,
        //         title: 'Learn React',
        //         completed: false,
        //     },
        //     {
            //         id: 5,
            //         title: 'namaz',
            //         completed: false
            //     },
            //     {
                //         id: 6,
                //         title: 'khana',
                //         completed: false
                //     },
// ];


// app.get('/', (req, res) =>  res.send('server is running'));


const app = express();
const port = 4000;

app.use(morgan('tiny'));
app.use(express.json());





// app.get('/', (req, res) => {
    // res.send('server is running');
    // res.status(200).send(tasks);
    
// });

// app.post('/', (req, res) => {
//     console.log(req);
//     res.send('post request !');
// });

// app.put('/', (req, res) => {
//     console.log(req);
//     res.send('put request !');
// });

// app.delete('/', (req, res) => {
//     console.log(req);
//     res.send('delete request !');
// });
  
app.use('/tasks', taskRoutes);

app.listen(port, () => console.log("Server is running on port " +port));
