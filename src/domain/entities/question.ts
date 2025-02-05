import { Slug } from './value-objects/slug'
import { Entity } from '@/core/entities/entity'

interface QuestionProps {
  title: string
  content: string
  slug: Slug
  authorId: string
}

export class Question extends Entity<QuestionProps> {
  get slug() {
    return this.props.slug
  }

  get authorId() {
    return this.props.authorId
  }
}
