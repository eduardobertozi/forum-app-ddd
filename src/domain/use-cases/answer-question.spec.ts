import { AnswersRepositoru } from '../repositories/answers.repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepositoru: AnswersRepositoru = {
  create: async () => {},
}

test('create answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepositoru)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
