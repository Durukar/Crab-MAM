import DashboardIcon from '@mui/icons-material/Dashboard'
import { Stack, Typography } from '@mui/material'
import {
  AppProvider,
  type Navigation,
  type Session,
} from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { useMemo, useState } from 'react'
import { Outlet } from 'react-router'

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
]

export default function MainLayout() {
  const [session, setSession] = useState<Session | null>({
    user: {
      name: 'Lucas Davila',
      email: 'lucas@grabmam.com',
      image: '...',
    },
  })

  function AppName() {
    return (
      <Stack className="flex flex-row items-center space-x-2">
        <Typography className="text-lg font-semibold h-6">
          Grab-MAM
        </Typography>
      </Stack>
    )
  }

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Lucas Davila',
            email: 'lucas@grabmam.com',
            image: '...',
          },
        })
      },
      signOut: () => {
        setSession(null)
      },
    }
  }, [])

  return (
    <AppProvider
      session={session}
      navigation={NAVIGATION}
      authentication={authentication}>
      <DashboardLayout slots={{ appTitle: AppName }}>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  )
}
