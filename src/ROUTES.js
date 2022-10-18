import HomePage from "./Views/HomePage"
import AllTools from "./Views/AllTools"
import Converter from "./Views/ConverterPage/MainConverter/Converter";

const ROUTES = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/all-tools',
        component: AllTools,
    }, 
    {
        path: '/merge_pdf',
        component: Converter,
    },
    {
        path: '/split_pdf',
        component: Converter,
    },
    {
        path: '/compress_pdf',
        component: Converter,
    },
    {
        path: '/jpg_to_pdf',
        component: Converter,
    },
    {
        path: '/word_to_pdf',
        component: Converter,
    },
    {
        path: '/ppt_to_pdf',
        component: Converter,
    },
    {
        path: '/excel_to_pdf',
        component: Converter,
    },
    {
        path: '/html_to_pdf',
        component: Converter,
    },
    {
        path: '/pdf_to_word',
        component: Converter,
    },
    {
        path: '/pdf_to_excel',
        component: Converter,
    },
    {
        path: '/pdf_to_ppt',
        component: Converter,
    },
    {
        path: '/pdf_to_jpg',
        component: Converter,
    },
    

];

export default ROUTES;