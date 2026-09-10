
class ToDoItem {
    #text;
    #status;
    #startDate;
    #endDate;

    constructor(text) {
        this.#text = text;
        this.#status = "todo";
        this.#startDate = new Date();
        this.#endDate = null;
    }

    complete() {
        this.#status = "done";
        this.#endDate = new Date();
    }
}