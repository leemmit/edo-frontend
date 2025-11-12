import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    classname?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ classname, children}) => {
  return <div className={cn('mx-auto max-w-[1080px]', classname)}>{children}</div>
}