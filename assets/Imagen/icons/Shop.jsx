import Svg, { Path } from "react-native-svg"
export const Shop= ({color}) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill={color}
      d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6H4Z"
    />
  </Svg>
)
