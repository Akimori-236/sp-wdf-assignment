import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Entity from "./Entity.js";
import { remove } from "./storage/EntitiesSlice.js";
import { resetFilters } from "./storage/FiltersSlice.js";
import { DeleteSelectedTestId, EntityTestId } from "./testId.js";

export default function EntitiesList() {
    const dispatch = useDispatch();
    var filters = useSelector((store) => store.filters.value);
    var entities = useSelector((store) => store.entities.value);
    const [selectedList, setSelectedList] = useState([]);
    const [filteredEntities, setFilteredEntities] = useState([]);

    useEffect(() => {
        setFilteredEntities(filterEntities(entities));
    }, [filters, entities]);

    function filterEntities(entities) {
        if (filters.length === 0) {
            return entities;
        } else {
            let filtered = entities.filter((entity) =>
                filters.includes(entity.category)
            );
            if (filtered.length === 0) {
                // schedules the provided function to run as soon as possible,
                // but not until after the currently executing script has finished
                // and any other microtasks that are already queued have run
                Promise.resolve().then(() => {
                    dispatch(resetFilters());
                });
                return entities;
            } else {
                return filtered;
            }
        }
    }

    function onToggleSelect(id, isSelected) {
        if (isSelected) {
            console.info(selectedList);
            console.info(`Selecting ${id}`);
            setSelectedList([...selectedList, id]);
        } else {
            setSelectedList(selectedList.filter((s) => s !== id));
        }
    }

    return (
        <div>
            <h1>Entities List</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <Link to="/pinned">
                                <button className="btn btn-warning">
                                    Pinned Entities
                                </button>
                            </Link>
                        </th>
                        <th></th>
                        <th>
                            <button
                                data-testid={DeleteSelectedTestId}
                                className={
                                    selectedList.length == 0
                                        ? "btn btn-outline-danger disabled"
                                        : "btn btn-danger"
                                }
                                onClick={() => {
                                    dispatch(remove(selectedList));
                                    console.log(`ENTITIES: ${entities}`);
                                    setSelectedList([]);
                                }}
                                disabled={selectedList.length == 0}
                            >
                                Delete All Selected
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEntities.map((entity) => (
                        <tr key={entity.id} data-testid={EntityTestId}>
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
        </div>
    );
}
