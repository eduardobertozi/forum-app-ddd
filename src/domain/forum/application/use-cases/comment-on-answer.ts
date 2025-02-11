import { AnswersRepository } from '@/domain/forum/application/repositories/answers.repository'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { AnswersCommentsRepository } from '@/domain/forum/application/repositories/answers-comments.repository'

interface CommentOnAnswerRequest {
  authorId: string
  answerId: string
  content: string
}

interface CommentOnAnswerResponse {
  questionComment: AnswerComment
}

export class CommentOnAnswerUseCase {
  constructor(
    private questionsRepository: AnswersRepository,
    private questionCommentsRepository: AnswersCommentsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: CommentOnAnswerRequest): Promise<CommentOnAnswerResponse> {
    const question = await this.questionsRepository.findById(answerId)

    if (!question) {
      throw new Error('Answer not found.')
    }

    const questionComment = AnswerComment.create({
      authorId: new UniqueEntityId(authorId),
      answerId: new UniqueEntityId(answerId),
      content,
    })

    await this.questionCommentsRepository.create(questionComment)

    return {
      questionComment,
    }
  }
}
