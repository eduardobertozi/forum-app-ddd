import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Entity } from '@/core/entities/entity'

interface AnswerAttachmentProps {
  questionId: UniqueEntityId
  attachmentId: UniqueEntityId
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentProps, id?: UniqueEntityId) {
    return new AnswerAttachment(props, id)
  }
}
