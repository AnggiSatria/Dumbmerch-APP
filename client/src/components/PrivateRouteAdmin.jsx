import { Outlet,  Navigate} from "react-router-dom";

export default function PrivateRouteAdmin() {
    const isAdminLogin = false

    return (
        isAdminLogin ? <Outlet /> : <Navigate to="/" />
    )
}

