import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepositoru } from '../repositories/answers.repository'

interface AnswerQuestionRequest {
  instructorId: string
  questionId: string
  content: string
}

interface AnswerQuestionResponse {
  answer: Answer
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepositoru) {}

  async execute({
    questionId,
    instructorId,
    content,
  }: AnswerQuestionRequest): Promise<AnswerQuestionResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.answersRepository.create(answer)

    return { answer }
  }
}
