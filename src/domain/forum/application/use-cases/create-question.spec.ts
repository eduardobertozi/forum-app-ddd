import { QuestionsRepositoru } from '@/domain/forum/application/repositories/questions.repository'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'

const fakeQuestionsRepositoru: QuestionsRepositoru = {
  create: async () => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepositoru)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New question',
    content: 'Question content',
  })

  expect(question.id).toBeTruthy()
})
