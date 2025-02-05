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
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
