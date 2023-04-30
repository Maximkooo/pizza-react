import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="145" cy="125" r="125" />
    <rect x="0" y="282" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="334" rx="0" ry="0" width="280" height="88" />
    <rect x="181" y="441" rx="10" ry="10" width="95" height="37" />
    <rect x="3" y="441" rx="10" ry="10" width="95" height="27" />
  </ContentLoader>
)

export default Skeleton