[Tier 1] Programming HW5: Make a To-Do App with Svelte and Meteor <br />
Olayeni Oladipo <br />
October 14, 2022 <br />

**Reflection:** What are the significant software concepts that this combination of technologies has that each previous set of technologies did not? Or that they handle significantly differently?



**Important files to view:** 
- client/main.css | client/main.html | client/main.js
- imports/api/tasks.js | imports/ui/App.svelte | imports/ui/Task.svelte

**Instructions** to launch prototype:

1) Clone or download this repo, saving the files to a directory
2) Open terminal and CD into the directory of the downloaded files.
3) Enter the following lines into your terminal.
> npm install -g meteor <br />
> meteor update --release METEOR@2.7.3 <br />
> npm start <br />
4) Open the link (similar to http://localhost:3000/) that pops up in your terminal.

On the link, play around with the following features: <br />
1) Press sign in and 'create an account'.
2) Add a todo list by typing where it says 'Type to add new tasks'
3) Press the 'X' button to delete a todo item.
4) Check off the todo-item by pressing the white box to the left of the item.
5) Press the 'Public' button to toggle the todo item to be 'Private' and vice versa.
4) Select 'Hide Completed Tasks' to show only undone tasks.
7) Refresh your page and see the same information remain

Worked off the code from the following sources:
- https://github.com/meteor/simple-todos-svelte
Comments informed by the following:
- https://forums.meteor.com/t/solved-when-should-we-use-meteor-startup/2710 </br>
- https://svelte.dev/tutorial/onmount </br>
- http://meteortips.com/first-meteor-tutorial/publish-subscribe/ </br>
- https://packosphere.com/meteor/react-meteor-data </br>
- https://svelte.dev/tutorial/reactive-statements </br>
- https://knockoutjs.com/documentation/html-binding.html#:~:text=The%20html%20binding%20causes%20the,more%20efficient%20text%20binding%20instead. </br>
- https://svelte-tutorial.meteor.com/simple-todos/04-update-and-remove.html </br>

![screenshot](screenshot.png)
