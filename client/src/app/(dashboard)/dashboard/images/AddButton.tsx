'use client';

import { ReactElement, SyntheticEvent, useRef } from 'react';

function AddButton({onSelectImages}: { onSelectImages: Function }): ReactElement {
    const fileInput = useRef<HTMLInputElement>(null);

    const addHandler = async (event: SyntheticEvent) => {
        switch (event.type) {
            case 'click':
                fileInput.current.click();
                break;
            case 'change':
                onSelectImages(event.target.files);
                break;
        }
    };

    return (
        <label>
            <input onChange={addHandler}
                   ref={fileInput}
                   accept="image/*"
                   type="file"
                   multiple={true}
                   hidden={true}/>
            <button onClick={addHandler}>+</button>
            <span>Добавить изображение</span>
        </label>
    );
}

export default AddButton;