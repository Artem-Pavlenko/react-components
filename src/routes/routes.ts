import {MaterialButton} from "../Components/MaterialButton/MaterialButton";
import {BurgerMenuButton} from "../Components/BurgerMenuButton/BurgerMenuButton";
import {DragAndDrop_List} from "../Components/Drag And Drop/DragAndDrop_List/DragAndDrop_List";
import {DragAndDrop2} from "../Components/Drag And Drop/DragAndDrop2/DragAndDrop2";
import {DragAndDrop_trello} from "../Components/Drag And Drop/DragAndDrop_ difficult_version/DragAndDrop_trello";
import {DragAndDrop_upload_file} from "../Components/Drag And Drop/DragAndDrop_upload_file/DragAndDrop_upload_file";
import {PlantValidation} from "../Components/Validation/PlantValidation/PlantValidation";
import Preloader_transition
    from "../Components/Animations/react-transition-group/Preloader_transition/Preloader_transition";
import {v1} from 'uuid'
import Preloader_CSSTransition
    from "../Components/Animations/react-transition-group/Preloader_CSSTransition/Preloader_CSSTransition";
import TypingEffect from "../Components/Animations/TypingEffect/TypingEffect";
import {ModalBlock} from "../Components/Modal/ModalBlock";
import BurgerMenu from "../Components/BurgerMenu/BurgerMenu";
import Checkbox from "../Components/Checkbox/Checkbox";


export const componentsRoutes = [
    {
        path: '/button',
        Component: MaterialButton,
        id: v1()
    },
    {
        path: '/burgerMenuButton',
        Component: BurgerMenuButton,
        id: v1()
    },
    {
        path: '/dragAndDrop',
        Component: DragAndDrop_List,
        id: v1()
    },
    {
        path: '/dragAndDrop2',
        Component: DragAndDrop2,
        id: v1()
    },
    {
        path: '/dragAndDrop-difficult_version',
        Component: DragAndDrop_trello,
        id: v1()
    },
    {
        path: '/dragAndDrop-upload_file',
        Component: DragAndDrop_upload_file,
        id: v1()
    },
    {
        path: '/plantValidation',
        Component: PlantValidation,
        id: v1()
    },
    {
        path: '/modal',
        Component:ModalBlock,
        id: v1()
    },
    {
        path: '/burgerMenu',
        Component: BurgerMenu,
        id : v1()
    },
    {
        path: '/checkbox',
        Component: Checkbox,
        id: v1()
    }
]

export const animationRoutes = [
    {
        path: '/rtg',
        Component: Preloader_transition,
        id: v1()
    },
    {
        path: '/rtgCSSTransition',
        Component: Preloader_CSSTransition,
        id: v1()
    },
    {
        path: '/typingEffect',
        Component: TypingEffect,
        id: v1()
    }
]