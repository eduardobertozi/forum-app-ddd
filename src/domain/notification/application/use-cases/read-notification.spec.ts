
import { InMemoryNotificationsRepository } from '@root/test/repositories/in-memory-notifications.repository'
import { ReadNotificationUseCase } from './read-notification'
import { makeNotification } from '@root/test/factories/make-notification'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'

let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sut: ReadNotificationUseCase

describe('Read Notification', () => {
  beforeEach(() => {
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sut = new ReadNotificationUseCase(inMemoryNotificationsRepository)
  })

  it('should be able to read a notification', async () => {
    const notification = makeNotification()

    inMemoryNotificationsRepository.create(notification)
    
    const result = await sut.execute({
      recipientId: notification.recipientId.toString(),
      notificationId: notification.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryNotificationsRepository.items[0].readAt).toEqual(
      expect.any(Date)
    )
  })

  it('should not be able to not read a notification from another user', async () => {
      const notification = makeNotification({ recipientId: new UniqueEntityId('recipient-1') })
  
      await inMemoryNotificationsRepository.create(notification)
  
      const result = await sut.execute({
        notificationId: notification.id.toString(),
        recipientId: 'recipient-2',
      })
  
      expect(result.isLeft()).toBe(true)
      expect(result.value).toBeInstanceOf(NotAllowedError)
    })
})
