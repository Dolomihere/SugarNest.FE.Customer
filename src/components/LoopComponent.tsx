interface LoopComponentProp {
  count: number
  children: React.ReactNode;
}

const LoopComponent = ({count, children} : LoopComponentProp) => {
  return (
    [...Array(count)].map((_, index) => (
      <div key={index}>
        {children}
      </div>
    ))
  )
}

export default LoopComponent;