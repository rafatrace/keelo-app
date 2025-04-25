import { tokenCache } from '@clerk/clerk-expo/token-cache'
import RootStack from '~navigation'
import { ClerkProvider } from '@clerk/clerk-expo'

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <RootStack />
    </ClerkProvider>
  )
}
