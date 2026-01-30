import { useEffect } from "react";

const RedirectExternal = ({ url }: { url: string }) => {
    useEffect(() => {
        window.location.replace(url);
    }, [url]);

    return <h5>Redirecting...</h5>;
};

export default RedirectExternal;
