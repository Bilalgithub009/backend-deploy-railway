
import express from 'express';
import morgan from 'morgan';


const tasks = [
    {
        id: 1,
        title: 'Learn Node.js',
        completed: false
    },
    {
        id: 2,
        title: 'Learn Express',
        completed: false
    },
    {
        id: 3,
        title: 'Learn MongoDB',
        completed: false
    },
    {
        id: 4,
        title: 'Learn React',
        completed: false,
    },
    {
        id: 5,
        title: 'namaz',
        completed: false
    },
    {
        id: 6,
        title: 'khana',
        completed: false
    },
];




const app = express();
const port = 4000;

app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
    // res.send('server is running');
    res.status(200).send(tasks);
    
});

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
app.listen(port, () => console.log("Server is running on port " +port));
