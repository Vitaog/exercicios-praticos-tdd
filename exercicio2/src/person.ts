import { Email } from './email';

export class Person {
  constructor(
    public name: string,
    public age: number,
    public emails: Email[]
  ) {}
}
