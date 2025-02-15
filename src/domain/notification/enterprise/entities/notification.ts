import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/value-objects/unique-entity-id";
import { Optional } from "@/core/types/optional";

export interface NotificationProps {
  recipientId: UniqueEntityId
  title: string
  content: string
  readAt?: Date
  createdAt: Date
}

export class Notification extends Entity<NotificationProps> {
  get recipientId(): UniqueEntityId {
    return this.props.recipientId
  }

  get title(): string {
    return this.props.title
  }

  get content(): string {
    return this.props.content
  }

  get readAt(): Date | undefined {
    return this.props.readAt
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  read() {
    this.props.readAt = new Date()
  }

  static create(props: Optional<NotificationProps, 'createdAt'>, id?: UniqueEntityId) {
    return new Notification({
      ...props,
      createdAt: props.createdAt ?? new Date()
    }, 
     id
    )
  }
}