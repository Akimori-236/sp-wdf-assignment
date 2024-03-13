import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "./storage/FiltersSlice.js";
import { FilterCategoryTestId } from "./testId.js";

export default function FilterEntitiesForm() {
    var entities = useSelector((store) => store.entities.value);

    const dispatch = useDispatch();

    var uniqueCategories = [
        ...new Set(entities.map((entity) => entity.category)),
    ];

    return (
        <ul className="list-group list-unstyled">
            {uniqueCategories.map((category, index) => (
                <li key={index}>
                    <div className="form-check">
                        <input
                            className="form-check-input my-auto"
                            type="checkbox"
                            value={category}
                            id={category}
                            onChange={(e) =>
                                dispatch(
                                    setFilters({
                                        category,
                                        checked: e.target.checked,
                                    })
                                )
                            }
                            data-testid={FilterCategoryTestId}
                        />
                        <label
                            className="form-check-label w-25"
                            htmlFor={category}
                        >
                            {category}
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    );
}
