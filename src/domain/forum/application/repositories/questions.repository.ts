import { Question } from '@/domain/forum/enterprise/entities/question'

export interface QuestionsRepositoru {
  findBySlug(slug: string): Promise<Question | null>
  create(question: Question): Promise<void>
}
