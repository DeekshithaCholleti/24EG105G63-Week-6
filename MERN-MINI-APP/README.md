#STATE MANAGEMENT
 sharing state + keeping state sync across app
 Context API-->small apps
 Redux 

 #Context API
  - create context object(pipeline)
  - Add state to context object(add water to pipeline)



Context with useState hook is a best and simple state management mechanism for small applications.
But it creates unnessacary rerendering issues when multiple sate is part of context
to over come this unnessecary issue,create multiple contexts and make sure each ccontext  have a single state
when the application size is huge,then maintainence of multiple contexts will became an issue
For such large applications
advanced state management tools like redux or ZUSTAND can be used