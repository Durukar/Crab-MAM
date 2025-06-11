import { useTheme } from '@mui/material'
import { AppProvider } from '@toolpad/core/AppProvider'
import { type AuthProvider, SignInPage } from '@toolpad/core/SignInPage'

const providers = [{ id: 'credentials', name: 'Credentials' }]

const BRANDING = {
  logo: (
    <img
      src="https://mui.com/static/logo.svg"
      alt="LOGO"
      style={{ height: 24 }}
    />
  ),
}

const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`)
      resolve()
    }, 500)
  })
  return promise
}

export default function LoginPage() {
  const theme = useTheme()
  return (
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{
          emailField: { autoFocus: false },
          form: { noValidate: true },
        }}
      />
    </AppProvider>
  )
}
