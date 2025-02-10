import { QuestionsRepositoru } from '@/domain/forum/application/repositories/questions.repository'

interface EditQuestionRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

interface EditQuestionResponse {}

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepositoru) {}

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

    await this.questionsRepository.save(question)

    return {}
  }
}
