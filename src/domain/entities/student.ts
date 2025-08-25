import { randomUUID } from 'node:crypto'
import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

export interface StudentProps {
  name: string 
}

export class Student extends Entity<StudentProps>{
  static create(props: StudentProps,
    id?: UniqueEntityID){
    const student = new Student(props, id)

    return student
  } //static nao precisa instanciar a classe pra chamar ele, pode ser chamado como Question.nomeDoMetodoStatic
}