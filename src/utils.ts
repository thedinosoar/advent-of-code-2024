export class BinaryList {
  private list: number[] = [];

  insert(num: number): void {
    const index = this.findInsertionIndex(num);
    this.list.splice(index, 0, num);
  }

  private findInsertionIndex(num: number): number {
    let low = 0;
    let high = this.list.length;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (this.list[mid] < num) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }

  get length() {
    return this.list.length;
  }

  getList(): number[] {
    return this.list;
  }
}
