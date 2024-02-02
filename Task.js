function calculateTime() {
    const tasksInput = document.getElementById('tasks').value.split(',');
    const cooldownInput = parseInt(document.getElementById('cooldown').value);
  
    const result = leastTimeToFinish(tasksInput, cooldownInput);
  
    document.getElementById('output').innerText = `Least number of units of time: ${result}`;
  }
  
  function leastTimeToFinish(tasks, cooldown) {
    const taskCount = {};
    let maxCount = 0;
    let maxTasks = 0;
  
    tasks.forEach(task => {
      taskCount[task] = (taskCount[task] || 0) + 1;
  
      if (taskCount[task] > maxCount) {
        maxCount = taskCount[task];
        maxTasks = 1;
      } else if (taskCount[task] === maxCount) {
        maxTasks++;
      }
    });
  
    return Math.max((maxCount - 1) * (cooldown + 1) + maxTasks, tasks.length);
  }
  