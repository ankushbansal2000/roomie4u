import { useCallback } from "react";

interface ModalInterface {
    disabled ?: boolean,
    onsubmit: () => void;
}

const Modal: React.FC<ModalInterface> = (
    {disabled, onsubmit}) => {

    const handleSubmit  = useCallback(()=> {
        if(disabled){
            return;
        }
        onsubmit();
    }, [disabled, onsubmit])

    return(
        <div>
            
        </div>
    )
}

export default Modal;