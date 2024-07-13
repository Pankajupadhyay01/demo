import mongoose from "mongoose";

const WorksnapsTimeEntry = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    timeEntries: {
        type: Object
    }
});

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
    },
    displayName: {
        type: String,
        trim: true
    },
    municipality: {
        type: String
    }
});

export const wsTimeEntryModel = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntry);
export const studentModal = mongoose.model('Student', StudentSchema);

