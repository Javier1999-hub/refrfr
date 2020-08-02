export class LoginObject {
  public username: string;
  public password: string;
  /* se declara lo que se va a pedir y se controla la informacion*/
  
  constructor( object: any){
    this.username = (object.username) ? object.username : null;
    this.password = (object.password) ? object.password : null;
  }
}
