export class Pagination {
  public pageSize!: number;
  public pageNumber!: number;

  constructor(pageSize: number, pageNumber: number) {
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
  }
}
