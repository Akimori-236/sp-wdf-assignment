import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Entity from "./Entity";

export default function PinnedEntities() {
    var entities = useSelector((store) => store.entities.value);
    var pinnedEntities = entities.filter((entity) => entity.pinned == true);

    return (
        <>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">
                                <button className="btn btn-primary m-3">
                                    ⮜ Back
                                </button>
                            </Link>
                        </td>
                        <td>
                            <h1 className="m-2">Pinned Entities</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-hover">
                <tbody>
                    {pinnedEntities.map((entity) => (
                        <tr key={entity.id}>
                            <Entity
                                entity={entity}
                                onToggleSelect={(isSelected) =>
                                    onToggleSelect(entity.id, isSelected)
                                }
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
