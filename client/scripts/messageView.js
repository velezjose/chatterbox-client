var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username <%= username %>" onclick='Friends.toggleStatus(<%= username %>)'><%= username %>"</div>
        <div><%= text %>"</div>
      </div>
  `)

};