import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers.repository'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Either, right } from '@/core/either'

interface AnswerQuestionRequest {
  instructorId: string
  questionId: string
  content: string
}

type AnswerQuestionResponse = Either<
  null,
  {
    answer: Answer
  }
>

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

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

    return right({ answer })
  }
}
