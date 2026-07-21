import cn from 'classnames'
import { twMerge } from 'tailwind-merge'

export default function cm(...args: cn.ArgumentArray) {
  return twMerge(cn(args))
}
