import { randomUUID } from "node:crypto"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface AnswerProps {
  content: string
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

    static create(props: Optional<AnswerProps, 'createdAt'>,
      id?: UniqueEntityID){
      const answer = new Answer({
        ...props,
        createdAt: new Date()
      }, id)
      return answer
    } //static nao precisa instanciar a classe pra chamar ele, pode ser chamado como Question.nomeDoMetodoStatic
}