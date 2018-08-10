import '../sass/style.scss';
import {Issue} from './issue.js';
import {IssueList} from './issue-list.js'
import {IssuesListEventHandler} from './issue-list-handlers.js'


const ENTER_KEY_CODE = 13;

function init() {

  const ui_list = document.querySelector('#js-issues-list');
  const add_description_input = document.querySelector('#js-issue-description-input');
  const add_assignee_select = document.querySelector('#js-issue-assignee-dropdown');
  const add_new_button = document.querySelector('#js-add-issue-button');
  const add_severity_select = document.querySelector('#issueSeverityInput');

  const issueList = new IssueList({ ul: ui_list, restoreFromLocalStorage: true });

  ui_list.addEventListener('click', (event) => {
    IssuesListEventHandler.delegatedTodoItemClick(event, issueList);
  });

  add_description_input.addEventListener('keydown', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      const value = add_description_input.value.trim();
      IssuesListEventHandler.onAddItem(event, issueList, value);
      add_description_input.value = '';
      add_description_input.focus();
    }
  });

  add_new_button.addEventListener('click', (event) => {
    const description = add_description_input.value.trim();
    const assigned = add_assignee_select.options[add_assignee_select.selectedIndex].value;
    const severity = add_severity_select.options[add_severity_select.selectedIndex].value;
    IssuesListEventHandler.onAddItem(event, issueList, description,assigned,severity);
    add_description_input.value = '';
    add_assignee_input.value = '';
    add_description_input.focus();
  });

  issueList.render();

}

init();
