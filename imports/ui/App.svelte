<!-- Script contains javascript. -->
<script>
  // Imports
  import { Meteor } from "meteor/meteor";
  import { onMount } from 'svelte';
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';  
  import { BlazeTemplate } from 'meteor/svelte:blaze-integration';
  import Task from './Task.svelte';
  import { Tasks } from '../api/tasks.js'

  let newTask = "";
  let hideCompleted = false;
  let tasks;
  let currentUser;
  
  // onMount runs after the component is first rendered to the DOM.
  onMount(async () => {
    // subscribing to the data 'tasks' from the client side.
    // vs. publish that takes data from server to the browser.
    Meteor.subscribe('tasks');
  });

  // $: marks a statement as reactive. usezTracker is a hook that gets the value
  // from a reactive function in svelte components.
  // Reactivity keeps variables synced with DOM but also variables synced with other 
  // reactive variables. Runs each time a varible is changed.
  $: incompleteCount = useTracker(() => Tasks.find({ checked: { $ne: true } }).count()); 

  // UseTracker can also be used to grab user data.
  $: currentUser = useTracker(() => Meteor.user());

  // Get all the tasks with find function.
  const taskStore = Tasks.find({}, { sort: { createdAt: -1 } });
  // Reactive block
  $: {
      tasks = $taskStore;
      if (hideCompleted) {
          tasks = tasks.filter(task => !task.checked);
      }
  };

 // a function to be called within the html section.
 function handleSubmit(event) {
      // calls the function in the test.js file in the Meteor.methods section.
      Meteor.call("tasks.insert", newTask);

      // Clear form
      newTask = "";
  };

</script>
 
<!-- HTML section -->
<div class="container">
  <header>
    <h1>Todo List ({ $incompleteCount })</h1>
    <label className="hide-completed">
      <!-- bind: binds the attribute to a value -->
      <input
        type="checkbox"
        bind:checked={hideCompleted}
      />
      Hide Completed Tasks
    </label>
    
    <!-- A meteor template for logging in - imported in -->
    <BlazeTemplate template="loginButtons" />

    {#if $currentUser}
    <form class="new-task" on:submit|preventDefault={handleSubmit}>
      <!-- bind savers what the user types in to variable newTask -->
      <input
        type="text"
        placeholder="Type to add new tasks"
        bind:value={newTask}
      />
    </form>
    {/if}
  </header>
  <ul>
  {#each tasks as task}
  <!-- Create a Task component - connecting to Task.svelte -->
    <Task
      key={task._id}
      task={task}
    />
  {/each}
  </ul>
</div>

