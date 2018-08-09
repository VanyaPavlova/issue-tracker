export class Issue {
   constructor({ description = "", severity = ["Low", "Medium", "High"], assigned = "" }) {
     this.description = description;
     this.severity = severity;
     this.assigned = assigned;
   }

   toHtml() {
     return `
        <div class="item-default-view clearfix">
          <label>${this.description}</label>
          <label>${this.description}</label>
          <label>${this.assigned}</label>
        </div>`;
   }
}
