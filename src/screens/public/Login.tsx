import { Button, StyleSheet, Text } from 'react-native'
import Block from '~components/atoms/Block'
import { COLORS } from '~config/colors'
import { useOAuth, useUser } from '@clerk/clerk-expo'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  // Services
  const { isSignedIn, user } = useUser()
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_github' })

  const handlePress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow()
      if (createdSessionId) {
        await setActive({ session: createdSessionId })
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }

  return (
    <Block style={styles.container}>
      <SafeAreaView>
        {isSignedIn && <Text>{user?.fullName}</Text>}
        <Button title="Sign in with GitHub" onPress={handlePress} />
      </SafeAreaView>
    </Block>
  )
}

/**
 * Styles
 */
export const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: COLORS.bg }
})

export default Login
