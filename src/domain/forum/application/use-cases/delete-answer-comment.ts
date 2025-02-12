import { AnswersCommentsRepository } from '@/domain/forum/application/repositories/answers-comments.repository'
import { Either, left, right } from '@/core/either'

interface DeleteAnswerCommentRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentResponse = Either<string, {}>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswersCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentRequest): Promise<DeleteAnswerCommentResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      return left('Question comment not found.')
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left('Not allowed.')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}
