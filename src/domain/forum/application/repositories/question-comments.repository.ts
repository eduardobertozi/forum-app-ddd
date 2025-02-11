import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export interface QuestionsCommentsRepository {
  create(questionComment: QuestionComment): Promise<void>
}
