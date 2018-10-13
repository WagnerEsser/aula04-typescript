export interface Time {
    id : Number;
    nome : String;
    dataCriacao : Date;
    corUniformePrincipal ?: String;
    corUniformeSecundario ?: String;
    // o ? no nome do atributo, torna-o opcional para uma nova instância
}