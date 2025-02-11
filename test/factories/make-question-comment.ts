import { QuestionProps } from '@/domain/forum/enterprise/entities/question'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { faker } from '@faker-js/faker'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export function makeQuestionComment(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityId,
) {
  return QuestionComment.create(
    {
      authorId: new UniqueEntityId(),
      questionId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )
}
