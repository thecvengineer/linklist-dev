'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

const TopNavLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const pathname = usePathname()
  const _href = `/dashboard/${href}`
  const isActive = _href === pathname
  return (
    <Link
      href={_href}
      className={cn(
        'inline-flex justify-center items-center text-[var(--dark-color)] box-border',
        isActive
          ? 'border-b-2 border-b-[var(--primary-color)] text-[var(--primary-color)]'
          : 'text-[var(--dark-color)] border-b-2 border-b-transparent'
      )}
    >
      {children}
    </Link>
  )
}

export const MobileTopNav = () => {
  return (
    <nav className="md:hidden z-10 fixed top-[60px] left-0 w-full max-md:bg-white md:bg-white/85 md:backdrop-blur-2xl grid grid-flow-col items-stretch text-sm box-border h-[50px] text-center">
      <TopNavLink href="links">链接</TopNavLink>
      <TopNavLink href="design">设计</TopNavLink>
      <TopNavLink href="settings">设置</TopNavLink>
    </nav>
  )
}
