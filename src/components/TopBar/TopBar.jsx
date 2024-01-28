import { useContext } from "react";
import { IsLoggedInStateContext } from "../../context/IsLoggedInStateContext";
import { Button } from "../Button/Button";
import styles from "./TopBar.module.css";

export function TopBar() {
    const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInStateContext);

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Reactowe przepisy</span>
            {isLoggedIn ? (
                <>
                    <span>Zalogowany</span>
                    <Button onClick={() => setIsLoggedIn(false)}>
                        Wyloguj
                    </Button>
                </>
            ) : (
                <Button onClick={() => setIsLoggedIn(true)}>Zaloguj</Button>
            )}
        </div>
    );
}
