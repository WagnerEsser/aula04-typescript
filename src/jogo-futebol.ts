import {Time} from './time'

export class JogoDeFutebol {

    times : Array<Time> = [];

    // é possível retornar "any" numa função
    /* é possível: function facaAlgo(id: any) --> any: sem tipo
       poderá então fazer algo como: (id as Number). --> utilizará o "id" como sendo do tipo Number
    */

    incluirTime(id : Number, nome : String, dataCriacao: Date, corUniformePrincipal : String, corUniformeSecundario : String) {
        const time = {
            id: id,
            nome: nome,
            dataCriacao: dataCriacao,
            corUniformePrincipal: corUniformePrincipal,
            corUniformeSecundario: corUniformeSecundario
        };
        this.times.push(time);
    }
}