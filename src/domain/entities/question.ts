import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Slug } from './value-objects/slug'
import { Entity } from '@/core/entities/entity'

interface QuestionProps {
  authorId: UniqueEntityId
  bestAnswerId: UniqueEntityId
  title: string
  content: string
  slug: Slug
  created_at: Date
  updated_at?: Date
}

export class Question extends Entity<QuestionProps> {
  get slug() {
    return this.props.slug
  }

  get authorId() {
    return this.props.authorId
  }
}
