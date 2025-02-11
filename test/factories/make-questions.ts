import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { faker } from '@faker-js/faker'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityId,
) {
  return Question.create(
    {
      title: faker.lorem.sentence(),
      slug: Slug.create('example-question'),
      authorId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )
}
