import { AnswersCommentsRepository } from '@/domain/forum/application/repositories/answers-comments.repository'

interface DeleteAnswerCommentRequest {
  authorId: string
  answerCommentId: string
}

interface DeleteAnswerCommentResponse {}

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswersCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentRequest): Promise<DeleteAnswerCommentResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      throw new Error('Question comment not found.')
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('Not allowed.')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return {}
  }
}
