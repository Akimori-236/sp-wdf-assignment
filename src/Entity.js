import { useState } from "react";
import {
    PencilFill,
    PinAngle,
    PinFill,
    TrashFill,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { pin, remove, unpin } from "./storage/EntitiesSlice.js";
import {
    EntityCategoryTestId,
    EntityDeleteTestId,
    EntitySelectTestId,
} from "./testId.js";

export default function Entity({ entity, onToggleSelect }) {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);

    return (
        <>
            <td>
                {entity.pinned == true ? (
                    <button
                        className="btn btn-warning m-1"
                        onClick={() => {
                            dispatch(unpin({ id: entity.id }));
                        }}
                    >
                        <PinFill className="m-1" />
                    </button>
                ) : (
                    <button
                        className="btn btn-outline-secondary m-1"
                        onClick={() => {
                            dispatch(pin({ id: entity.id }));
                        }}
                    >
                        <PinAngle className="m-1" />
                    </button>
                )}
            </td>
            <td>
                <input
                    type="checkbox"
                    className="form-check-input m-2"
                    data-testid={EntitySelectTestId}
                    checked={selected}
                    onChange={() => {
                        onToggleSelect(!selected);
                        setSelected(!selected);
                    }}
                />
            </td>
            <td>
                <ul className="list-unstyled my-auto">
                    <li>
                        <span>ID: </span>
                        <span>{entity.id}</span>
                    </li>
                    <li>
                        <span>Category: </span>
                        <span data-testid={EntityCategoryTestId}>
                            {entity.category}
                        </span>
                    </li>
                </ul>
            </td>
            <td>
                <Link to={`/update/${entity.id}`}>
                    <button className="btn btn-primary m-1">
                        <PencilFill className="m-1" />
                    </button>
                </Link>
                <button
                    className="btn btn-danger m-1"
                    data-testid={EntityDeleteTestId}
                    onClick={() => dispatch(remove([entity.id]))}
                >
                    <TrashFill className="m-1" />
                </button>
            </td>
        </>
    );
}
