import { QuestionsRepository } from '@/domain/forum/application/repositories/questions.repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { ResourceNotFoundError } from '@/domain/forum/application/use-cases/errors/resource-not-found'
import { NotAllowedError } from '@/domain/forum/application/use-cases/errors/not-allowed-error'
import { Either, left, right } from '@/core/either'

interface EditQuestionRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

type EditQuestionResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
    title,
    content,
  }: EditQuestionRequest): Promise<EditQuestionResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    question.title = title
    question.content = content

    return right({
      question,
    })
  }
}
