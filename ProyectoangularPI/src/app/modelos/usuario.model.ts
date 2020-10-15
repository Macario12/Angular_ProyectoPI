export class usuario{
    constructor(
        public _id:string,
        public carnet: number,
        public nombre: string,
        public apellidos: string,
        public password: string,
        public correo: string
    ){}
}