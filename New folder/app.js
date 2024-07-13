import express from "express"
import { studentModal, wsTimeEntryModel } from "./modals/user.js";
import bodyParser from "body-parser"
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function fetchStudent() {
    try {
        const allStudents = await studentModal.find().lean();
        const timeEntries = await wsTimeEntryModel.find().lean();
        allStudents.forEach(student => {
            console.log(`Student: ${student.firstName} ${student.lastName}`);
            const entries = timeEntries.filter(entry => entry.student.toString() === student._id.toString());
            console.log(entries);
            entries.forEach(entry => {
                console.log(`Time Entries:`, entry.timeEntries);
            });
        });
    } catch (error) {
        console.error('Error :- ', error);
    }
}


app.get('/get', async (req, res) => {
    try {
        await fetchStudent();
        res.send('fetched sucessfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default app;