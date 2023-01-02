import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/TasksCollection';
import '/imports/api/TaskMethods';

const insertTask = (task, user) => {
    TasksCollection.insert({
        text: task.text,
        userId: user._id,
        createdAt: task.createdAt,
    });
}

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
        });
    }

    const user = Accounts.findUserByUsername(SEED_USERNAME);
    if (TasksCollection.find().count() === 0) {
        [
            {text: 'Study admission requirements', createdAt: new Date() },
            {text: 'Prepare personal statement', createdAt: new Date() },
            {text: 'Prepare resume', createdAt: new Date() },
            {text: 'Prepare reference letter', createdAt: new Date() },
            {text: 'Prepare Qualification records', createdAt: new Date() },
        ].forEach(t => insertTask(t, user));
    }
});
