import { useEffect, useState } from "react"

export default () => {
  const [rest, setRest] = useState<number>(3)

  useEffect(() => {
    if(rest > 0) {
      setTimeout(() => {
        setRest(rest - 1)
      }, 1e3)
    } else {
      location.replace(location.origin)
    }
  }, [rest])

  return <>
    <div>유효하지 않은 URL 입니다.</div>
    <div>{rest}초 이후, 메인 페이지로 이동합니다.</div>
  </>
}
