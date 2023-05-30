'use client';
import styles from "./../css/main.module.css";
interface MainProps {
    children : React.ReactNode
}
const Main: React.FC<MainProps> = (
    {
        children
    }
) => {
    return(
<div className={styles.Body_Div}>{children}</div>
    )
}

export default Main;