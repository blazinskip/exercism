class LinkedList<T> {
  private static EMPTY_LIST = 0;

  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private counter = 0;

  push(element: T): void {
    const node = new Node(element);

    if (this.counter === LinkedList.EMPTY_LIST) {
      this.linkFirstElement(node);
    } else {
      // @ts-ignore
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.counter ++;
  }

  unshift(newElement: T): void {
    const element = new Node(newElement);

    if (this.counter === LinkedList.EMPTY_LIST) {
      this.linkFirstElement(element);
    } else {
      // @ts-ignore
      this.head.previous = element;
      element.next = this.head;
      this.head = element;
    }

    this.counter ++;
  }

  pop(): T {
    if (!this.tail) {
      throw new Error('List is empty');
    }

    const tail = this.tail;
    this.unlink(tail);
    this.tail = tail.previous;

    return tail.value;
  }

  shift(): T {
    if (!this.head) {
      throw new Error('List is empty');
    }

    const head = this.head;
    this.unlink(head);
    this.head = head.next;

    return head.value;
  }

  delete(elementToRemove: T): void {
    if (!this.head) {
      throw new Error('List is empty');
    }

    let node: Node<T> | null = this.head;
    do {
      if (node.value === elementToRemove) {
        this.unlink(node);
      }
      node = node.next;
    } while (node)
  }

  count(): number {
    return this.counter;
  }

  private linkFirstElement(node: Node<T>) {
    this.head = node;
    this.tail = node;
  }

  private unlink(node: Node<T>): void {
    if (node.previous) {
      node.previous.next = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    }
    this.counter--;
  }
}

class Node<T> {
  private _next: Node<T> | null = null;
  private _previous: Node<T> | null = null;

  private readonly _value: T;

  constructor(value: T) {
    this._value = value;
  }

  set previous(previous: Node<T> | null) {
    this._previous = previous;
  }

  get previous(): Node<T> | null {
    return this._previous;
  }

  set next(next: Node<T> | null) {
    this._next = next;
  }

  get next(): Node<T> | null {
    return this._next;
  }

  get value() {
    return this._value;
  }
}

export default LinkedList;
