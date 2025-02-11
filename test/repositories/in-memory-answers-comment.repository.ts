import { AnswersCommentsRepository } from '@/domain/forum/application/repositories/answers-comments.repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  implements AnswersCommentsRepository
{
  public items: AnswerComment[] = []

  async create(questionComment: AnswerComment): Promise<void> {
    this.items.push(questionComment)
  }
}
