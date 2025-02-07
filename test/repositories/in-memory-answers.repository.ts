import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepositoru } from '@/domain/forum/application/repositories/answers.repository'

export class InMemoryAnswersRepository implements AnswersRepositoru {
  public items: Answer[] = []

  async create(answer: Answer): Promise<void> {
    this.items.push(answer)
  }
}
