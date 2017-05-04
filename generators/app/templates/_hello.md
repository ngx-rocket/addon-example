# <%= props.appName // From shared properties %>

<% if (props.sayHello) { -%>
Hello <%= props.helloName %>!
<% } else { -%>
...was not in the mood to say hello :-(
<% }-%>
