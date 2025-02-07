import { Question } from '@/domain/forum/enterprise/entities/question'

export interface QuestionsRepositoru {
  create(question: Question): Promise<void>
}
