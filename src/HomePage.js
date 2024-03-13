import AddEntityForm from './AddEntityForm';
import EntitiesList from './EntitiesList';
import FilterEntitiesForm from './FilterEntitiesForm';

export default function HomePage() {
    return (
        <div className="container text-center">
            <AddEntityForm />
            <div className="row">
                <div className="col-3">
                    <FilterEntitiesForm />
                </div>
                <div className="col-9">
                    <EntitiesList />
                </div>
            </div>
        </div>
    );
}
