import { ReactNode } from 'react'
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'

interface IBlockProps extends Partial<ViewProps> {
  flex?: number | string
  row?: boolean
  wrap?: boolean
  center?: boolean
  middle?: boolean
  right?: boolean
  top?: boolean
  start?: boolean
  bottom?: boolean
  space?: string
  gap?: number
  children?: ReactNode
  style?: StyleProp<ViewStyle>
}

const Block = (props: IBlockProps) => {
  const { flex, row, wrap, center, middle, right, top, start, bottom, gap, space, style, children, ...rest } = props

  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === 'disabled' && { flex: 0 },
    gap && { gap },
    center && styles.center,
    middle && styles.middle,
    wrap && styles.wrap,
    right && styles.right,
    top && styles.top,
    start && styles.start,
    bottom && styles.bottom,
    space && { justifyContent: `space-${space}` },
    row && styles.row,
    style
  ]

  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  block: {},
  row: {
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center'
  },
  middle: {
    justifyContent: 'center'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  right: {
    justifyContent: 'flex-end'
  },
  top: {
    alignItems: 'flex-start'
  },
  start: {
    justifyContent: 'flex-start'
  },
  bottom: {
    alignItems: 'flex-end'
  }
})

export default Block
