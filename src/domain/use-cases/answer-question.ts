import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Answer } from '../entities/answer'
import { AnswersRepositoru } from '../repositories/answers.repository'

interface AnswerQuestionInput {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepositoru) {}

  async execute({ questionId, instructorId, content }: AnswerQuestionInput) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
