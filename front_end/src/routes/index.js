import { ContactsPage } from "../pages/ContactPage/ContactsPage";
import darkModePage from "../pages/PracticeLayoutPage/darkMode";
import hoverFocusOtherPage from "../pages/PracticeLayoutPage/HoverFocusOtherPage";
import positionPage from "../pages/PracticeLayoutPage/positionPage";
import PracticeArrayMethods from "../pages/PracticePage/PracticeArrayMethods";
import PracticePageDay1 from "../pages/PracticePage/PracticePage";
import PracticeReactPage from "../pages/PracticePage/React/PracticeReactPage";


export const routes=[
    {
        path:"/",
        page: PracticePageDay1,
        isShowHeader: true,
    },
    {
        path:"/positionPage",
        page: positionPage,
        isShowHeader: true,
    },
    {
        path:"/hoverFocusOtherPage",
        page: hoverFocusOtherPage,
        isShowHeader: true
    },
{
        path:"/darkModePage",
        page: darkModePage,
        isShowHeader: true
},
{
    path:"/practiceReactPage",
    page: PracticeReactPage,
    isShowHeader: true
},
{
    path:"/practiceArrayMethods",
    page: PracticeArrayMethods,
    isShowHeader: true
},
{
    path:"/contacts",
    page: ContactsPage,
    isShowHeader: true
}

]