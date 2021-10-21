import { Spinner } from "reactstrap";

const Loader = () => {
    return (
        <div className="col-lg-12">
            <Spinner type="grow" color="primary" />
        </div>
    )
}

export default Loader;