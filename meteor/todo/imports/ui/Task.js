import { Template } from 'meteor/templating';
// import { TasksCollection } from '/imports/api/TasksCollection';

import './Task.html';

Template.task.events({
    "click .toggle-checked"() {
        Meteor.call("tasks.setChecked", this._id, !this.isChecked);
        // TasksCollection.update(this._id, {
        //     $set: { isChecked: !this.isChecked },
        // });
    },
    "click .delete"() {
        Meteor.call("tasks.remove", this._id);
        // TasksCollection.remove(this._id);
    }
});
