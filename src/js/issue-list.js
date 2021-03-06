import {Issue} from './issue.js';

export class IssueList {
  constructor({ issues = [], ul, restoreFromLocalStorage = false }) {
    if (restoreFromLocalStorage) {
       this.issues = this.restoreFromLocalStorage();
    }
    else {
      this.issues = issues;
    }

     this.ul = ul;
  }

  addItem(description = '',assigned = '', severity = '') {
    if (!description && !assigned) {
      return;
    }
    const issue = new Issue ({ description: description, assigned:assigned, severity:severity});
    this.issues.push(issue);
  }

  removeItem(index) {
     return this.issues.splice(index, 1)[0];
  }


  toHtmlString() {
    const html = this.issues.map((item, index) => item.toHtmlString({index: index})).join('');
    return html;
  }

  render() {
    this.ul.innerHTML = this.toHtmlString();
  }

  saveToLocalStorage() {
    const str = JSON.stringify(this.issues);
    localStorage.setItem("issues",str);
  }

  restoreFromLocalStorage() {
    const str = localStorage.getItem("issues") || '[]';
    const issues = JSON.parse(str).map(t => new Issue(t));
    return issues;
  }

}
