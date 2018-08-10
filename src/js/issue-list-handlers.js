export class IssuesListEventHandler {

  static delegatedTodoItemClick(event, issueList) {
    event.preventDefault();
    console.log(event.target);

    const target = event.target;
    const nodeName = event.target.nodeName;

    if (nodeName === 'BUTTON') {
      const action = target.dataset.action;
      const li = target.parentElement.parentElement;
      const index = Number(li.dataset.index);

      if (action === 'delete') {
         issueList.removeItem(index);
         issueList.render();
         issueList.saveToLocalStorage();
      }
    }
  }

  static onAddItem(event, issueList, description, assigned, severity) {
     issueList.addItem(description,assigned, severity);
     issueList.render();
     issueList.saveToLocalStorage();
  }

}

