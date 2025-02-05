import { Answer } from '../entities/answer'

export interface AnswersRepositoru {
  create(answer: Answer): Promise<void>
}
