import { useDispatch } from "react-redux";
import { generateRandomId } from "./helper.js";
import { add } from "./storage/EntitiesSlice.js";
import { AddEntityCategoryTestId, AddEntitySubmitTestId } from "./testId.js";

export default function AddEntityForm() {
    const dispatch = useDispatch();

    const submission = (event) => {
        event.preventDefault();
        const category = document.getElementById("categoryID").value;
        dispatch(add({ id: generateRandomId(10), category, pinned: false }));
    };

    return (
        <form
            className="form-inline d-flex justify-content-center"
            onSubmit={submission}
        >
            <label htmlFor="categoryID">Category</label>
            <input
                type="text"
                name="category"
                id="categoryID"
                className="form-control m-3"
                data-testid={AddEntityCategoryTestId}
            />
            <button
                type="submit"
                className="btn btn-primary"
                data-testid={AddEntitySubmitTestId}
            >
                Submit
            </button>
        </form>
    );
}
