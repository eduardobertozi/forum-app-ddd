import { AnswersRepository } from '@/domain/forum/application/repositories/answers.repository'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { AnswersCommentsRepository } from '@/domain/forum/application/repositories/answers-comments.repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/domain/forum/application/use-cases/errors/resource-not-found'

interface CommentOnAnswerRequest {
  authorId: string
  answerId: string
  content: string
}

type CommentOnAnswerResponse = Either<
  ResourceNotFoundError,
  {
    questionComment: AnswerComment
  }
>

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
      return left(new ResourceNotFoundError())
    }

    const questionComment = AnswerComment.create({
      authorId: new UniqueEntityId(authorId),
      answerId: new UniqueEntityId(answerId),
      content,
    })

    await this.questionCommentsRepository.create(questionComment)

    return right({ questionComment })
  }
}
