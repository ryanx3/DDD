import { Slug } from "./value-objects/slug"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Entity } from "../../core/entities/entity"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID //Para colocar como melhor resposta tipo do stackoverflow
  title: string
  content: string
  slug: Slug
}

export class Question extends Entity<QuestionProps> {
}