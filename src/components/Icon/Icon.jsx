const Icon = ({ id, size = 24 }) => {
    return (
      <svg width={size} height={size}>
        <use href={`/sprite.svg#${id}`} />
      </svg>
    )
  }
  
  export default Icon