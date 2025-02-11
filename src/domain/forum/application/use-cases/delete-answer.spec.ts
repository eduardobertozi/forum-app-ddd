import { InMemoryAnswersRepository } from '@root/test/repositories/in-memory-answers.repository'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { makeAnswer } from '@root/test/factories/make-answer'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: DeleteAnswerUseCase

describe('DeleteAnswer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new DeleteAnswerUseCase(inMemoryAnswersRepository)
  })

  it('should be able delete a answer', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )

    await inMemoryAnswersRepository.create(newAnswer)

    await sut.execute({
      answerId: 'answer-1',
      authorId: 'author-1',
    })

    expect(inMemoryAnswersRepository.items).toHaveLength(0)
  })

  it('should not be able delete a answer from another user', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )

    await inMemoryAnswersRepository.create(newAnswer)

    await expect(() => {
      return sut.execute({
        answerId: 'question-1',
        authorId: 'author-2',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
