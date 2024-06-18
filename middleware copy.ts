import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { User } from '@supabase/supabase-js'
import { Tables } from './db_types'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
  // let {
  //   user,
  //   dbUser,
  //   response,
  // }: {
  //   user: User | null
  //   dbUser: Tables<'users'> | null
  //   response: NextResponse<unknown>
  // } = result as {
  //   user: User | null
  //   dbUser: Tables<'users'> | null
  //   response: NextResponse<unknown>
  // }

  // const pathname = request.nextUrl.pathname
  // const isAuthorized = user && dbUser
  // const protectedPaths = [
  //   '/setup-your-page',
  //   '/account-settings',
  //   '/dashboard',
  //   '/dashboard/links',
  //   '/dashboard/design',
  //   '/dashboard/posts',
  //   '/dashboard/settings',
  // ]

  // response = NextResponse.next()

  // return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}