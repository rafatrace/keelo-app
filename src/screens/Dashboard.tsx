import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'

import { RootStackParamList } from '../navigation'
import { COLORS } from '~config/colors'
import Block from '~components/atoms/Block'

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Dashboard'>

const Dashboard = () => {
  // Services
  const navigation = useNavigation<OverviewScreenNavigationProps>()

  return <Block style={styles.container}></Block>
}

/**
 * Styles
 */
export const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: COLORS.bg }
})

export default Dashboard
