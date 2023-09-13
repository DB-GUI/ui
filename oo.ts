import { ReactNode } from 'react'

export
interface Props {
  className?: string
  children?: ReactNode
}

export
interface State<Value> {
  value: Value
  set(value: Value): void
  reset?(): void
}
