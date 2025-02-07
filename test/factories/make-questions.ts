import { QuestionProps } from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'Example Question',
    slug: Slug.create('example-question'),
    authorId: new UniqueEntityId(),
    content: 'A exemple question',
    ...override,
  })

  return question
}
