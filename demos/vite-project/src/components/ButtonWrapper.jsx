const ButtonWrapper = (props) => {
  const { comp = [] } = props
  return comp.map(c => c.render())
}

export default ButtonWrapper
