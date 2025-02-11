import { QuestionsRepository } from '@/domain/forum/application/repositories/questions.repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

interface EditQuestionRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

interface EditQuestionResponse {
  question: Question
}

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
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    question.title = title
    question.content = content

    return {
      question,
    }
  }
}
