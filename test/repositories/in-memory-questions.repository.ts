import { QuestionsRepositoru } from '@/domain/forum/application/repositories/questions.repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepositoru {
  public items: Question[] = []

  async create(question: Question): Promise<void> {
    this.items.push(question)
  }
}
