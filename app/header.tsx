'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { TextRoll } from '@/components/ui/text-roll'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          className="inline-block size-10 rounded-full ring-2 ring-white"
          src="/profile.jpeg"
          alt=""
        />
        <div>
          <Link
            href="/"
            className="text-xl font-medium text-black dark:text-white"
          >
            <TextRoll>Sahibjot Saggu</TextRoll>
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Product-focused Software Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
