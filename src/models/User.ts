import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId } from "typeorm";
import { Rol } from "./Rol";//importo rol porque es foranea

@Entity()
export class User {
    @PrimaryGeneratedColumn()//Primarykey
    id: number
    @ManyToOne(() => Rol)//MaytoOne crea una variable de linkeo
    rol: Rol

    @RelationId((user: User) => user.rol)// accede a los atributos de usuario
    rolId: number

    @Column({ nullable: true })//{nullable:true} => es una validacion, tiene que ser obligatorio el dato
    name: string

    @Column({ nullable: true })
    last: string

    @Column()
    age: number

    @Column({ default: true })
    state: boolean
}