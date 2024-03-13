import { Provider, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { update } from "./storage/EntitiesSlice.js";
import store from "./storage/store";

export default function UpdateEntity(props) {
    const params = useParams();
    const id = params.id;
    var entities = useSelector((store) => store.entities.value);
    const entity = entities.find((entity) => entity.id === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function updateEntity(event) {
        event.preventDefault();
        const newCategory = document.getElementById("categoryID").value;

        if (!newCategory) {
            alert("Category cannot be empty");
            return;
        }

        const updatedEntity = { category: newCategory, id: id };
        dispatch(update(updatedEntity));
        navigate("/");
    }

    return (
        <>
            <table className="table">
                <tr>
                    <td>
                        <Link to="/">
                            <button className="btn btn-primary m-3">
                                ⮜ Back
                            </button>
                        </Link>
                    </td>
                    <td>
                        <h1 className="m-2">Update Entity</h1>
                    </td>
                </tr>
            </table>
            <div className="p-3 m-3">
                <form>
                    <div className="form-group row">
                        <label
                            htmlFor="IDID"
                            className="col-sm-2 col-form-label"
                        >
                            ID
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="IDID"
                            className="form-control col-sm-9"
                            defaultValue={entity.id}
                            readOnly
                        />
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="categoryID"
                            className="col-sm-2 col-form-label"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="categoryID"
                            className="form-control col-sm-9"
                            defaultValue={entity.category}
                            required
                        />
                    </div>

                    <button className="btn btn-primary" onClick={updateEntity}>
                        Update Entity
                    </button>
                </form>
            </div>
        </>
    );
}
