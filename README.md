<img src="https://travis-ci.org/jackseabolt/TaskTracker-client.svg?branch=master" alt="build:started">

<h1>TaskTracker</h1>
<p><em>This document provides general information on the TaskTracker application</em></p>

<img src="/src/images/screenshot.png" width="auto">

Why TaskTracker
-------------
Everyone needs a way to stay organized. Try TaskTracker! Create a list of items you want to complete. Check them off as each task is completed. 

How It Works
-------------
The TaskTracker client-side application was built using React and Redux. The backend was built with Node, Express, Sequelize and PostreSQL. 

<table layout="fixed">
  <tr>
    <td width="55%">
      <p>Manage your daily tasks on a custom task organization board.</p>
    </td>
    <td width = "40%">
      <img src="/src/images/board.png" max-height="240px" width="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>Organize your boards using the navigation board. Need to step away? All of your data is saved in a secure SQL database.</p>
    </td>
    <td>
      <img src="/src/images/board.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <!-- 
  <tr>
    <td>
      <p>The large numbers and color coding make the patron tile easy to understand.  Additionl information available includes seat location, time of stay, and a graphic representation of drink purchases.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patrondet.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>And if someone goes too far, help is a click away.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patronemergency.png" max-height="240px" witdh="auto">
    </td>
  </tr> -->
</table>

For local use
--------

```bash
# Clone repository
git clone https://github.com/jackseabolt/TaskTracker-client.git

# Change directory
cd TaskTracker-client

# Install NPM dependencies
npm install

# Start the server
npm start
```
