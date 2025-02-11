import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export interface AnswersCommentsRepository {
  create(questionComment: AnswerComment): Promise<void>
}
