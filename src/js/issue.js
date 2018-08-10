export class Issue {
   constructor({ description = "", severity = "", assigned = "" }) {
     this.description = description;
     this.severity = severity;
     this.assigned = assigned;
   }

    toHtmlString(props) {
     return `
      <li data-index="${props.index}">
        <div class="item-default-view" clearfix">
          <label class="item-default-header-label">Description
          <label class="item-default-content-label">${this.description}</label>
          <hr/>
          <label class="item-default-header-label">Assigned to
          <label class="item-default-content-label">${this.assigned}</label>
          <hr>
          <label class="item-default-header-label">Severity
          <label class="item-default-content-label">${this.severity}</label>
          <button type="button" data-action="delete" class="btn btn-danger pull-right">Delete</button>
        </div>
      </li>`;
   }
}
