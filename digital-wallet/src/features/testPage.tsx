import { useIsMobile } from "@/common/hooks/useIsMobile";
import { FC } from "react";
import style from "../common/styles/main-page.module.scss";

export const TestPage: FC = () => {
  const isMobile = useIsMobile()
  
  return (
    <div className={style.container}>
      <title>Test</title>
    </div>
  )
}