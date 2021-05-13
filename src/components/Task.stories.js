import React from 'react';

import Task from './Task';

export default {
  component: Task, //  the component itself
  title: 'Task', // how to refer to the component in the sidebar of the Storybook app
};

/*
To define our stories, we export a function for each of our test states 
to generate a story. The story is a function that returns a rendered element 
(i.e. a component with a set of props) in a given state
---exactly like a Functional Component.
*/

// making a copy of a function
// allow each exported story to set its own properties,
// but use the same implementation.
const Template = (args) => <Task {...args} />;

// Once an args value changes so does the component.
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
