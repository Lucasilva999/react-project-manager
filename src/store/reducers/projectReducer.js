const initState = {
  projects: [
    {
      id: 1,
      title: "New Task",
      content: "This is a new task and It's very cool"
    },
    {
      id: 2,
      title: "Another Task",
      content: "This is a new task and It's very cool"
    },
    {
      id: 3,
      title: "Another New Task",
      content: "This is a new task and It's very cool"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("CREATE_PROJECT", action.project);
      break;
    default:
      console.log("NO ACTION RECEIVED");
  }

  return state;
};

export default projectReducer;
