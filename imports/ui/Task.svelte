<script>
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';  
  import { Tasks } from "../api/tasks.js";

  // Variable declaration
  export let key;
  export let task;
  let showPrivateButton;

  // Grabbing the user - reactive element
  $: currentUser = useTracker(() => Meteor.user());


  $: {
    showPrivateButton = false;
    if($currentUser){
      showPrivateButton = task.owner === $currentUser._id;
    }
  }

  // Functions that call functions in the Task.js file
  function toggleChecked() {
      // Set the checked property to the opposite of its current value
      Meteor.call("tasks.setChecked", task._id, !task.checked);
  };

  function deleteThisTask() {
      Meteor.call("tasks.remove", task._id);
  };

  function togglePrivate() {
    Meteor.call("tasks.setPrivate", task._id, !task.private);
  }
  
</script>

<!-- HTML Section -->
<li class:checked="{task.checked}"
    class:private="{task.private}" >
  <!-- deleteThisTask refers to earlier function. -->
  <button class="delete" on:click={deleteThisTask}>
    &times;
  </button>

  <input
    type="checkbox"
    readonly
    checked={!!task.checked}    
    on:click={toggleChecked}
  />

  <!-- Using if statements to showcase buttons. -->
  {#if showPrivateButton}
    <button className="toggle-private" on:click="{togglePrivate}">
      { task.private ? "Private" : "Public" }
    </button>
  {/if}

  <!-- <strong> tag is for text for strong importance -->
  <span class="text">
    <strong>{ task.username }</strong>
    : { task.text }
  </span>
</li>
