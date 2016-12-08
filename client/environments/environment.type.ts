export class Environment {
  constructor(
    public production: boolean,
    public apiPort: number = 3000,
    public apiHost: string = 'localhost',
    public protocol: string = 'http://'){}
}
