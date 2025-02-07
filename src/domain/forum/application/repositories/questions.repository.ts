import { Answer } from '@/domain/forum/enterprise/entities/answer'

export interface AnswersRepositoru {
  create(answer: Answer): Promise<void>
}
