
const ILPost = () => import('./components/ILPost/ILPost');
const Electric = () => import('./components/ElectricCompany/ElectricPage');
const BguPage = () => import('./components/BguPage/BguPage');

export const ROUTE_CONFIG = [
    {path: '/il-post', component: ILPost},
    {path: '/electric', component: Electric},
    {path: '/bgu', component: BguPage},
]

export default { ROUTE_CONFIG }

