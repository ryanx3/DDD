import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

export interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps>{
static create(props: InstructorProps,
    id?: UniqueEntityID){
    const instructor = new Instructor(props, id)
    
    return instructor
  } //static nao precisa instanciar a classe pra chamar ele, pode ser chamado como Question.nomeDoMetodoStatic
}