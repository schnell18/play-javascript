import { Template } from 'meteor/templating';
import { TasksCollection } from '/imports/db/TasksCollection';
import { ReactiveDict } from 'meteor/reactive-dict';

import './App.html';
import './Task.js';
import './Login.js';

const IS_LOADING_STRING = "isLoading";
const HIDE_COMPLETED_STRING = "hideCompleted";
const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

const getTasksFilter = () => {
    const user = getUser();
    const hideCompletedFilter = { isChecked: {$ne: true } };
    const userFilter = user ? { userId: user._id } : {};
    const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

    return { userFilter, pendingOnlyFilter };
};

Template.mainContainer.onCreated(function mainContainerOnCreated() {
    this.state = new ReactiveDict();

    const handler = Meteor.subscribe("tasks");
    Tracker.autorun(() => {
        this.state.set(IS_LOADING_STRING, !handler.ready());
    });
});

Template.mainContainer.helpers({
    isLoading() {
        const instance = Template.instance();
        return instance.state.get(IS_LOADING_STRING);
    },
    getUser() {
        return getUser();
    },
    isUserLogged() {
        return isUserLogged();
    },
    incompleteCount() {
        const incompleteTasksCount = TasksCollection.find({ isChecked: { $ne: true } }).count();
        return incompleteTasksCount ? `(${incompleteTasksCount})` : '';
    },
    tasks() {
        if (!isUserLogged()) {
            return [];
        }
        const instance = Template.instance();
        const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
        const { userFilter, pendingOnlyFilter } = getTasksFilter();

        return TasksCollection.find(
            hideCompleted ? pendingOnlyFilter : userFilter,
            {sort: { createdAt: -1 }}
        ).fetch();
    },
    hideCompleted() {
        return Template.instance().state.get(HIDE_COMPLETED_STRING);
    },
});

Template.mainContainer.events({
    "click .user"() {
        Meteor.logout();
    },
    "click #hide-completed-button"(_, instance) {
        const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
        instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
    }
});

Template.form.events({
    "submit .task-form"(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;
        Meteor.call("tasks.insert", text);
        target.text.value = '';
    }
});
