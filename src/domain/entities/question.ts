import { Slug } from "./value-objects/slug"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Entity } from "../../core/entities/entity"
import { Optional } from "../../core/types/optional"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID //Para colocar como melhor resposta tipo do stackoverflow
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, 'createdAt'>,
    id?: UniqueEntityID){
    const question = new Question({
      ...props,
      createdAt: new Date()
    }, id)
    return question
  } //static nao precisa instanciar a classe pra chamar ele, pode ser chamado como Question.nomeDoMetodoStatic
}