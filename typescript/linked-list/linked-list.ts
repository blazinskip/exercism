class LinkedList<T> {
  private static EMPTY_LIST = 0;

  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private counter = 0;

  push(newElement: T): void {
    const node = new Node(newElement);

    if (this.counter === LinkedList.EMPTY_LIST) {
      this.counter ++;
      this.head = node;
      this.tail = node;
    } else {
      this.counter ++;
      // @ts-ignore
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      this.counter++;
    }
  }

  pop(): T {
    if (this.tail === null) {
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

    return this.head.value;
  }

  unshift(newElement: T): void {
    this.counter++;
    const newNode = new Node(newElement);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (this.head.next !== null) {
        tail = this.head.next;
      }

      tail.next = newNode;
    }
  }

  delete(_elementToRemove: T): void {

  }

  count(): number {
    return this.counter;
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
